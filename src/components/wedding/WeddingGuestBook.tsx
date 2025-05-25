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
  IconButton,
  Chip,
  Pagination,
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  BookmarkBorder,
  Bookmark,
} from '@mui/icons-material';

interface WeddingWish {
  id: string;
  name: string;
  message: string;
  date: string;
  avatar?: string;
  isLiked?: boolean;
  isBookmarked?: boolean;
  category?: string;
}

interface WeddingGuestBookProps {
  wishes?: WeddingWish[];
  title?: string;
  itemsPerPage?: number;
  showPagination?: boolean;
}

export default function WeddingGuestBook({
  wishes = [
    {
      id: '1',
      name: 'Sarah Johnson',
      message:
        'Wishing you both a lifetime of love, happiness, and beautiful memories together. May your journey as husband and wife be filled with endless joy and countless blessings. Congratulations on your special day!',
      date: '2023-10-29',
      avatar: '/placeholder.svg?height=40&width=40&text=SJ',
      isLiked: false,
      isBookmarked: false,
      category: 'Family',
    },
    {
      id: '2',
      name: 'Michael Chen',
      message:
        "What a beautiful celebration of love! Seeing you two together fills my heart with joy. May your marriage be everything you've dreamed of and more. Here's to a wonderful future together!",
      date: '2023-10-29',
      avatar: '/placeholder.svg?height=40&width=40&text=MC',
      isLiked: true,
      isBookmarked: false,
      category: 'Friends',
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      message:
        "From the bottom of my heart, congratulations! Your love story is truly inspiring, and I'm so happy to witness this beautiful beginning. May your days be filled with laughter, love, and adventure.",
      date: '2023-10-29',
      avatar: '/placeholder.svg?height=40&width=40&text=ER',
      isLiked: false,
      isBookmarked: true,
      category: 'Colleagues',
    },
    {
      id: '4',
      name: 'David Thompson',
      message:
        'Congratulations to the happy couple! May your love continue to grow stronger with each passing day. Wishing you a marriage filled with understanding, patience, and unconditional love.',
      date: '2023-10-29',
      avatar: '/placeholder.svg?height=40&width=40&text=DT',
      isLiked: true,
      isBookmarked: false,
      category: 'Family',
    },
    {
      id: '5',
      name: 'Lisa Wang',
      message:
        'What a magical day! Your wedding was absolutely beautiful, and seeing the love between you two brought tears to my eyes. May your marriage be blessed with happiness, health, and prosperity.',
      date: '2023-10-29',
      avatar: '/placeholder.svg?height=40&width=40&text=LW',
      isLiked: false,
      isBookmarked: false,
      category: 'Friends',
    },
    {
      id: '6',
      name: 'Robert Martinez',
      message:
        'Cheers to the newlyweds! May your love story continue to unfold beautifully, filled with chapters of joy, adventure, and deep connection. Congratulations on finding your perfect match!',
      date: '2023-10-29',
      avatar: '/placeholder.svg?height=40&width=40&text=RM',
      isLiked: true,
      isBookmarked: true,
      category: 'Family',
    },
  ],
  title = 'Wedding Wishes',
  itemsPerPage = 4,
  showPagination = true,
}: WeddingGuestBookProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [wishList, setWishList] = useState(wishes);

  const totalPages = Math.ceil(wishList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentWishes = wishList.slice(startIndex, startIndex + itemsPerPage);

  const handleLike = (wishId: string) => {
    setWishList((prev) =>
      prev.map((wish) =>
        wish.id === wishId ? { ...wish, isLiked: !wish.isLiked } : wish,
      ),
    );
  };

  const handleBookmark = (wishId: string) => {
    setWishList((prev) =>
      prev.map((wish) =>
        wish.id === wishId
          ? { ...wish, isBookmarked: !wish.isBookmarked }
          : wish,
      ),
    );
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

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
            {title}
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: '#a0522d',
              fontWeight: 300,
              fontStyle: 'italic',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Heartfelt messages from our loved ones
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
            {currentWishes.map((wish, index) => (
              <Box key={wish.id} sx={{ mb: 4 }}>
                {/* Wish Header */}
                <Box
                  sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}
                >
                  <Avatar
                    src={wish.avatar}
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
                      .join('')}
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
                      {formatDate(wish.date)}
                    </Typography>
                  </Box>

                  {wish.category && (
                    <Chip
                      label={wish.category}
                      size='small'
                      sx={{
                        backgroundColor: '#f4e4bc',
                        color: '#8b4513',
                        fontSize: '0.7rem',
                        height: 24,
                      }}
                    />
                  )}
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

                  {/* Action Buttons */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      mt: 2,
                      gap: 1,
                    }}
                  >
                    <IconButton
                      size='small'
                      onClick={() => handleLike(wish.id)}
                      sx={{
                        color: wish.isLiked ? '#ff6b6b' : '#a0522d',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 107, 107, 0.1)',
                        },
                      }}
                    >
                      {wish.isLiked ? (
                        <Favorite fontSize='small' />
                      ) : (
                        <FavoriteBorder fontSize='small' />
                      )}
                    </IconButton>

                    <IconButton
                      size='small'
                      onClick={() => handleBookmark(wish.id)}
                      sx={{
                        color: wish.isBookmarked ? '#d4af37' : '#a0522d',
                        '&:hover': {
                          backgroundColor: 'rgba(212, 175, 55, 0.1)',
                        },
                      }}
                    >
                      {wish.isBookmarked ? (
                        <Bookmark fontSize='small' />
                      ) : (
                        <BookmarkBorder fontSize='small' />
                      )}
                    </IconButton>
                  </Box>
                </Box>

                {/* Divider */}
                {index < currentWishes.length - 1 && (
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
        {showPagination && totalPages > 1 && (
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

        {/* Page Info */}
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography
            variant='body2'
            sx={{
              color: '#a0522d',
              fontStyle: 'italic',
              fontSize: '0.875rem',
            }}
          >
            Page {currentPage} of {totalPages} • {wishList.length} wishes total
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
