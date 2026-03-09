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
        py: { xs: 10, md: 16 },
        backgroundColor: COLORS.bgDark,
        position: 'relative',
      }}
    >
      <Container maxWidth='md'>
        {/* Header */}
        <ScrollReveal>
          <Box
            sx={{ textAlign: 'center', mb: 8, position: 'relative', zIndex: 1 }}
          >
            <Typography
              sx={{
                fontFamily: FONTS.body,
                fontSize: '0.75rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: COLORS.accent,
                mb: 2,
                fontWeight: 500,
              }}
            >
              Guest Book
            </Typography>
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
                <CircularProgress sx={{ color: COLORS.accent }} />
              </Box>
            )}

            {!isLoading && wishes.length === 0 && (
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography
                  sx={{
                    fontFamily: FONTS.body,
                    color: COLORS.textSecondary,
                    fontSize: '0.9rem',
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
                    backgroundColor: COLORS.bgCard,
                    border: `1px solid ${COLORS.borderGold}`,
                    p: 4,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: COLORS.borderGoldHover,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {/* Wish Message */}
                  <Typography
                    sx={{
                      fontFamily: FONTS.serif,
                      color: COLORS.textPrimary,
                      lineHeight: 1.8,
                      fontSize: '1rem',
                      fontStyle: 'italic',
                      fontWeight: 300,
                      mb: 3,
                    }}
                  >
                    &ldquo;{wish.message}&rdquo;
                  </Typography>

                  {/* Thin separator */}
                  <Box
                    sx={{
                      width: 40,
                      height: '1px',
                      backgroundColor: COLORS.accent,
                      opacity: 0.3,
                      mb: 2,
                    }}
                  />

                  {/* Author & Date */}
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: FONTS.body,
                        color: COLORS.accent,
                        fontWeight: 500,
                        fontSize: '0.85rem',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {wish.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: COLORS.textSecondary,
                        fontSize: '0.75rem',
                        fontFamily: FONTS.body,
                        fontWeight: 300,
                      }}
                    >
                      {formatDate(wish.createdAt)}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </ScrollReveal>

        {/* Pagination */}
        {totalPages > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              size='large'
              sx={{
                '& .MuiPaginationItem-root': {
                  backgroundColor: 'transparent',
                  border: `1px solid ${COLORS.borderGold}`,
                  borderRadius: 0,
                  color: COLORS.textSecondary,
                  fontWeight: 400,
                  fontFamily: FONTS.body,
                  fontSize: '0.8rem',
                  '&:hover': {
                    backgroundColor: 'rgba(198, 169, 97, 0.08)',
                  },
                  '&.Mui-selected': {
                    backgroundColor: COLORS.accent,
                    color: COLORS.textOnPrimary,
                    '&:hover': {
                      backgroundColor: COLORS.accentDark,
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
