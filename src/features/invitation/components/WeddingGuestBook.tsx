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
        py: { xs: 10, md: 14 },
        backgroundColor: COLORS.bgCream,
      }}
    >
      <Container maxWidth='sm'>
        {/* Header */}
        <ScrollReveal>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant='h2' component='h2' sx={sectionHeadingStyle}>
              Lời Chúc
            </Typography>
            <OrnamentalDivider />
          </Box>
        </ScrollReveal>

        {/* Wishes */}
        <ScrollReveal delay={0.2}>
          {isLoading && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                py: 8,
              }}
            >
              <CircularProgress sx={{ color: COLORS.textSecondary }} size={24} />
            </Box>
          )}

          {!isLoading && wishes.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography
                sx={{
                  fontFamily: FONTS.serif,
                  color: COLORS.textSecondary,
                  fontSize: '1rem',
                  fontStyle: 'italic',
                }}
              >
                Chưa có lời chúc nào...
              </Typography>
            </Box>
          )}

          {wishes.map((wish, index) => (
            <Box
              key={wish.id}
              sx={{
                mb: 5,
                textAlign: 'center',
              }}
            >
              {/* Quote */}
              <Typography
                sx={{
                  fontFamily: FONTS.serif,
                  color: COLORS.textPrimary,
                  lineHeight: 1.8,
                  fontSize: '1.05rem',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  mb: 2,
                }}
              >
                &ldquo;{wish.message}&rdquo;
              </Typography>

              {/* Attribution */}
              <Typography
                sx={{
                  fontFamily: FONTS.body,
                  color: COLORS.textSecondary,
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                — {wish.name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: FONTS.body,
                  color: COLORS.textSecondary,
                  fontSize: '0.7rem',
                  mt: 0.5,
                  opacity: 0.7,
                }}
              >
                {formatDate(wish.createdAt)}
              </Typography>

              {/* Separator between wishes */}
              {index < wishes.length - 1 && (
                <Box
                  sx={{
                    width: 30,
                    height: '1px',
                    backgroundColor: COLORS.accent,
                    opacity: 0.3,
                    mx: 'auto',
                    mt: 4,
                  }}
                />
              )}
            </Box>
          ))}
        </ScrollReveal>

        {/* Pagination */}
        {totalPages > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              size='small'
              sx={{
                '& .MuiPaginationItem-root': {
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: COLORS.textSecondary,
                  fontWeight: 400,
                  fontFamily: FONTS.body,
                  fontSize: '0.8rem',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: COLORS.textPrimary,
                  },
                  '&.Mui-selected': {
                    backgroundColor: 'transparent',
                    color: COLORS.textPrimary,
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: 'transparent',
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
