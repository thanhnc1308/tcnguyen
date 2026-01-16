'use client';

import type React from 'react';

import { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Avatar,
  Divider,
  Pagination,
  CircularProgress,
} from '@mui/material';
import { months } from '../constants';
import { trpc } from '@/utils/trpc';

interface WeddingGuestBookProps {
  itemsPerPage?: number;
}

export default function WeddingGuestBook({
  itemsPerPage = 4,
}: WeddingGuestBookProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = trpc.invitation.getResponses.useQuery({
    page: currentPage,
    limit: itemsPerPage,
  });

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    // Use consistent formatting to avoid hydration issues
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  };

  const wishes = data?.data ?? [];
  const totalPages = data?.totalPages ?? 0;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f1e8 0%, #e8ddd4 100%)',
        py: 6,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(139, 69, 19, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(160, 82, 45, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(101, 67, 33, 0.03) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth='md'>
        {/* Notebook Header */}
        <Box
          sx={{ textAlign: 'center', mb: 6, position: 'relative', zIndex: 1 }}
        >
          <Typography
            variant='h2'
            component='h1'
            sx={{
              fontFamily: "'Dancing Script', cursive",
              color: '#8b4513',
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '3rem', md: '4rem' },
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Lời chúc
          </Typography>
        </Box>

        {/* Notebook Pages */}
        <Paper
          elevation={8}
          sx={{
            position: 'relative',
            backgroundColor: '#fefcf7',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            minHeight: 200,
            '&::before': {
              content: '""',
              position: 'absolute',
              left: 60,
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: '#ff6b6b',
              zIndex: 1,
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 50,
              backgroundColor: '#f8f4e6',
              borderRight: '1px solid #e0d5c7',
              zIndex: 0,
            },
          }}
        >
          {/* Spiral Binding */}
          <Box
            sx={{
              position: 'absolute',
              left: 15,
              top: 20,
              bottom: 20,
              width: 20,
              zIndex: 2,
            }}
          >
            {Array.from({ length: 12 }).map((_, index) => (
              <Box
                key={index}
                sx={{
                  position: 'absolute',
                  top: `${(index * 100) / 11}%`,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#d4af37',
                  border: '1px solid #b8941f',
                  boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.2)',
                }}
              />
            ))}
          </Box>

          {/* Notebook Lines Background */}
          <Box
            sx={{
              position: 'absolute',
              left: 80,
              right: 20,
              top: 0,
              bottom: 0,
              backgroundImage: `repeating-linear-gradient(
                transparent,
                transparent 31px,
                #e8ddd4 31px,
                #e8ddd4 32px
              )`,
              opacity: 0.6,
              zIndex: 0,
            }}
          />

          {/* Content */}
          <Box sx={{ pl: 10, pr: 4, py: 4, position: 'relative', zIndex: 2 }}>
            {isLoading && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  py: 8,
                }}
              >
                <CircularProgress sx={{ color: '#8b4513' }} />
              </Box>
            )}

            {!isLoading && wishes.length === 0 && (
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography
                  sx={{
                    fontFamily: "'Kalam', cursive",
                    color: '#a0522d',
                    fontSize: '1.1rem',
                  }}
                >
                  ...
                </Typography>
              </Box>
            )}

            {wishes.map((wish, index) => (
              <Box key={wish.id} sx={{ mb: 4 }}>
                {/* Wish Header */}
                <Box
                  sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}
                >
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundColor: '#8b4513',
                      color: 'white',
                      fontWeight: 600,
                    }}
                  >
                    {wish.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)
                      .toUpperCase()}
                  </Avatar>

                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant='h6'
                      sx={{
                        fontFamily: "'Kalam', cursive",
                        color: '#654321',
                        fontWeight: 600,
                        fontSize: '1.1rem',
                      }}
                    >
                      {wish.name}
                    </Typography>
                    <Typography
                      variant='caption'
                      sx={{
                        color: '#a0522d',
                        fontSize: '0.75rem',
                        fontStyle: 'italic',
                      }}
                    >
                      {formatDate(wish.createdAt)}
                    </Typography>
                  </Box>
                </Box>

                {/* Wish Message */}
                <Box
                  sx={{
                    ml: 6,
                    p: 3,
                    backgroundColor: 'rgba(248, 244, 230, 0.5)',
                    borderRadius: 2,
                    border: '1px dashed #d4af37',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: -8,
                      top: 20,
                      width: 0,
                      height: 0,
                      borderTop: '8px solid transparent',
                      borderBottom: '8px solid transparent',
                      borderRight: '8px solid rgba(248, 244, 230, 0.5)',
                    },
                  }}
                >
                  <Typography
                    variant='body1'
                    sx={{
                      fontFamily: "'Kalam', cursive",
                      color: '#5d4037',
                      lineHeight: 1.8,
                      fontSize: '1rem',
                      textAlign: 'justify',
                      letterSpacing: '0.3px',
                    }}
                  >
                    &quot;{wish.message}&quot;
                  </Typography>
                </Box>

                {/* Divider */}
                {index < wishes.length - 1 && (
                  <Divider
                    sx={{
                      mt: 3,
                      borderColor: '#e8ddd4',
                      borderStyle: 'dashed',
                      opacity: 0.7,
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Paper>

        {/* Pagination */}
        {totalPages > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color='primary'
              size='large'
              sx={{
                '& .MuiPaginationItem-root': {
                  backgroundColor: '#fefcf7',
                  border: '1px solid #e8ddd4',
                  color: '#8b4513',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#f4e4bc',
                  },
                  '&.Mui-selected': {
                    backgroundColor: '#8b4513',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#654321',
                    },
                  },
                },
              }}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
}
