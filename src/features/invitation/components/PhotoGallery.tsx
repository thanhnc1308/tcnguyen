'use client';

import { useState } from 'react';
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
  Container,
} from '@mui/material';
import { Close, ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Image from 'next/image';
import {
  COLORS,
  FONTS,
  TRANSITIONS,
  sectionHeadingStyle,
} from '../constants/design';
import ScrollReveal from './ScrollReveal';

interface WeddingPhoto {
  id: string;
  title: string;
  thumbnailUrl: string;
  fullImageUrl: string;
  alt: string;
  description?: string;
}

interface PhotoGalleryProps {
  photos?: WeddingPhoto[];
}

export default function PhotoGallery({
  photos = [
    {
      id: '1',
      title: 'Getting Ready',
      thumbnailUrl: '/images/wedding-bg.JPG',
      fullImageUrl: '/images/wedding-bg.JPG',
      alt: 'Bride getting ready',
      description: 'Beautiful moments of preparation before the ceremony',
    },
    {
      id: '2',
      title: 'First Look',
      thumbnailUrl: '/images/envelop.png',
      fullImageUrl: '/images/envelop.png',
      alt: 'First look moment',
      description: 'The magical first look between bride and groom',
    },
    {
      id: '3',
      title: 'Walking Down the Aisle',
      thumbnailUrl: '/images/qr-groom.jpg',
      fullImageUrl: '/images/qr-groom.jpg',
      alt: 'Walking down the aisle',
      description: "The bride's grand entrance",
    },
  ],
}: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<WeddingPhoto | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePhotoClick = (photo: WeddingPhoto, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const handleCloseDialog = () => {
    setSelectedPhoto(null);
  };

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  return (
    <Box
      id='gallery'
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: COLORS.bgDark,
      }}
    >
      <Container maxWidth='lg'>
        {/* Header */}
        <ScrollReveal>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
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
              Our Moments
            </Typography>
            <Typography variant='h2' component='h2' sx={sectionHeadingStyle}>
              Khoảnh Khắc
            </Typography>
          </Box>
        </ScrollReveal>

        {/* Masonry Grid */}
        <ScrollReveal delay={0.2}>
          <Box
            sx={{
              columnCount: { xs: 1, sm: 2, md: 3 },
              columnGap: '12px',
            }}
          >
            {photos.map((photo, index) => (
              <Box
                key={photo.id}
                sx={{
                  breakInside: 'avoid',
                  mb: 1.5,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: `all ${TRANSITIONS.slow} ease`,
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                  '&:hover .photo-overlay': {
                    opacity: 1,
                  },
                }}
                onClick={() => handlePhotoClick(photo, index)}
              >
                <Image
                  src={photo.thumbnailUrl}
                  alt={photo.alt}
                  width={600}
                  height={index % 3 === 0 ? 700 : index % 3 === 1 ? 500 : 600}
                  loading='lazy'
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    filter: 'brightness(0.85) contrast(1.05)',
                  }}
                />

                {/* Overlay */}
                <Box
                  className='photo-overlay'
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    p: 3,
                    opacity: 0,
                    transition: `opacity ${TRANSITIONS.normal} ease`,
                  }}
                >
                  <Typography
                    variant='h6'
                    sx={{
                      color: COLORS.textPrimary,
                      fontWeight: 300,
                      fontFamily: FONTS.serif,
                      fontSize: '1.2rem',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {photo.title}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </ScrollReveal>

        {/* Lightbox Dialog */}
        <Dialog
          open={!!selectedPhoto}
          onClose={handleCloseDialog}
          maxWidth={false}
          fullWidth
          sx={{
            '& .MuiDialog-paper': {
              backgroundColor: 'rgba(0,0,0,0.97)',
              backdropFilter: 'blur(20px)',
              margin: 0,
              maxHeight: '100vh',
              maxWidth: '100vw',
            },
          }}
        >
          <DialogContent
            sx={{
              p: 0,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {selectedPhoto && (
              <>
                <IconButton
                  onClick={handleCloseDialog}
                  aria-label='Close photo viewer'
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    color: COLORS.textPrimary,
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    zIndex: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  <Close />
                </IconButton>

                <IconButton
                  onClick={handlePrevious}
                  aria-label='Previous photo'
                  sx={{
                    position: 'absolute',
                    left: 20,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: COLORS.textPrimary,
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    zIndex: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  <ArrowBackIos />
                </IconButton>

                <IconButton
                  onClick={handleNext}
                  aria-label='Next photo'
                  sx={{
                    position: 'absolute',
                    right: 20,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: COLORS.textPrimary,
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    zIndex: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  <ArrowForwardIos />
                </IconButton>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxHeight: '100vh',
                    width: '100%',
                  }}
                >
                  <Image
                    src={selectedPhoto.fullImageUrl || '/images/wedding-bg.JPG'}
                    alt={selectedPhoto.alt}
                    width={800}
                    height={800}
                    style={{
                      maxWidth: '90vw',
                      maxHeight: '80vh',
                      objectFit: 'contain',
                    }}
                  />

                  <Box
                    sx={{
                      mt: 3,
                      textAlign: 'center',
                      color: COLORS.textPrimary,
                      maxWidth: 600,
                      px: 3,
                    }}
                  >
                    <Typography
                      variant='h5'
                      sx={{
                        fontFamily: FONTS.serif,
                        fontWeight: 300,
                        mb: 1,
                        fontSize: '1.4rem',
                      }}
                    >
                      {selectedPhoto.title}
                    </Typography>
                    {selectedPhoto.description && (
                      <Typography
                        variant='body1'
                        sx={{
                          color: COLORS.textSecondary,
                          mb: 2,
                          lineHeight: 1.6,
                          fontFamily: FONTS.body,
                          fontSize: '0.9rem',
                          fontWeight: 300,
                        }}
                      >
                        {selectedPhoto.description}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </>
            )}
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
}
