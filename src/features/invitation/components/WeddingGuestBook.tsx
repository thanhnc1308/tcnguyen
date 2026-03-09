'use client';

import type React from 'react';

import { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Pagination,
  CircularProgress,
} from '@mui/material';
import { months } from '../constants';
import { trpc } from '@/utils/trpc';
import { COLORS, FONTS, sectionHeadingStyle } from '../constants/design';
import ScrollReveal from './ScrollReveal';
import OrnamentalDivider from './OrnamentalDivider';

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
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  const wishes = data?.data ?? [];
  const totalPages = data?.totalPages ?? 0;

  return (
    <Box
      id='guestbook'
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: COLORS.bgCream,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: `repeating-linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primary} 6px, transparent 6px, transparent 10px)`,
          opacity: 0.15,
        },
      }}
    >
      <Container maxWidth='md'>
        {/* Header */}
        <ScrollReveal>
          <Box
            sx={{ textAlign: 'center', mb: 6, position: 'relative', zIndex: 1 }}
          >
            <Typography variant='h2' component='h2' sx={sectionHeadingStyle}>
              Lời Chúc
            </Typography>
            <OrnamentalDivider />
          </Box>
        </ScrollReveal>

        {/* Wishes */}
        <ScrollReveal delay={0.2}>
          <Box sx={{ minHeight: 200 }}>
            {isLoading && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  py: 8,
                }}
              >
                <CircularProgress sx={{ color: COLORS.primary }} />
              </Box>
            )}

            {!isLoading && wishes.length === 0 && (
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography
                  sx={{
                    fontFamily: FONTS.handwritten,
                    color: COLORS.textSecondary,
                    fontSize: '1.1rem',
                  }}
                >
                  ...
                </Typography>
              </Box>
            )}

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 3,
              }}
            >
              {wishes.map((wish) => (
                <Box
                  key={wish.id}
                  sx={{
                    backgroundColor: COLORS.bgWhite,
                    border: `2px solid ${COLORS.borderWoodblock}`,
                    borderRadius: 0.5,
                    p: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                      borderColor: 'rgba(44, 62, 107, 0.3)',
                    },
                  }}
                >
                  {/* Wish Message */}
                  <Typography
                    sx={{
                      fontFamily: FONTS.handwritten,
                      color: COLORS.textPrimary,
                      lineHeight: 1.8,
                      fontSize: '1rem',
                      mb: 2,
                    }}
                  >
                    &ldquo;{wish.message}&rdquo;
                  </Typography>

                  {/* Author & Date */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    {/* Avatar circle */}
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        backgroundColor: COLORS.indigo,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Typography
                        sx={{
                          color: COLORS.textOnPrimary,
                          fontWeight: 700,
                          fontSize: '0.8rem',
                          fontFamily: FONTS.serif,
                        }}
                      >
                        {wish.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                          .slice(0, 2)
                          .toUpperCase()}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontFamily: FONTS.serif,
                          color: COLORS.indigo,
                          fontWeight: 700,
                          fontSize: '0.9rem',
                        }}
                      >
                        {wish.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: COLORS.textSecondary,
                          fontSize: '0.75rem',
                          fontFamily: FONTS.serif,
                          fontStyle: 'italic',
                        }}
                      >
                        {formatDate(wish.createdAt)}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </ScrollReveal>

        {/* Pagination */}
        {totalPages > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              size='large'
              sx={{
                '& .MuiPaginationItem-root': {
                  backgroundColor: COLORS.bgWhite,
                  border: `1.5px solid ${COLORS.borderWoodblock}`,
                  borderRadius: 0.5,
                  color: COLORS.indigo,
                  fontWeight: 600,
                  fontFamily: FONTS.serif,
                  '&:hover': {
                    backgroundColor: COLORS.bgWarm,
                  },
                  '&.Mui-selected': {
                    backgroundColor: COLORS.indigo,
                    color: COLORS.textOnPrimary,
                    '&:hover': {
                      backgroundColor: COLORS.indigoDark,
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
