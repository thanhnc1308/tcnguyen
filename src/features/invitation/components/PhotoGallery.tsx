'use client';

import { useState } from 'react';
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
  Grid,
  Card,
  CardMedia,
  Container,
} from '@mui/material';
import { Close, ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Image from 'next/image';

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
  columns?: { xs: number; sm: number; md: number; lg: number };
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
  columns = { xs: 1, sm: 2, md: 3, lg: 4 },
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
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
        py: 6,
      }}
    >
      <Container maxWidth='xl'>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant='h2'
            component='h1'
            sx={{
              fontFamily: "'Dancing Script', cursive",
              color: '#6b7280',
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '3rem', md: '4rem' },
            }}
          >
            Một số khoảnh khắc của chúng mình
          </Typography>
        </Box>

        {/* Photo Grid */}
        <Box
          sx={{
            opacity: 1,
            transform: 'translateY(0)',
            transition: 'all 0.6s ease-in-out',
            animation: 'fadeInUp 0.8s ease-out',
            '@keyframes fadeInUp': {
              '0%': {
                opacity: 0,
                transform: 'translateY(30px)',
              },
              '100%': {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
          <Grid container spacing={3}>
            {photos.map((photo, index) => (
              <Grid
                size={{
                  xs: columns.xs,
                  sm: columns.sm,
                  md: columns.md,
                  lg: columns.lg,
                }}
                key={photo.id}
              >
                <Card
                  sx={{
                    position: 'relative',
                    borderRadius: 2,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    },
                  }}
                  onClick={() => handlePhotoClick(photo, index)}
                >
                  <CardMedia
                    component='img'
                    height='250'
                    image={photo.thumbnailUrl}
                    alt={photo.alt}
                    sx={{
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />

                  {/* Overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      p: 2,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      '&:hover': {
                        opacity: 1,
                      },
                    }}
                  >
                    <Typography
                      variant='h6'
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      {photo.title}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Lightbox Dialog */}
        <Dialog
          open={!!selectedPhoto}
          onClose={handleCloseDialog}
          maxWidth={false}
          fullWidth
          sx={{
            '& .MuiDialog-paper': {
              backgroundColor: 'rgba(0,0,0,0.95)',
              backdropFilter: 'blur(10px)',
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
                {/* Close Button */}
                <IconButton
                  onClick={handleCloseDialog}
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    color: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    zIndex: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.2)',
                    },
                  }}
                >
                  <Close />
                </IconButton>

                {/* Previous Button */}
                <IconButton
                  onClick={handlePrevious}
                  sx={{
                    position: 'absolute',
                    left: 20,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    zIndex: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.2)',
                    },
                  }}
                >
                  <ArrowBackIos />
                </IconButton>

                {/* Next Button */}
                <IconButton
                  onClick={handleNext}
                  sx={{
                    position: 'absolute',
                    right: 20,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    zIndex: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.2)',
                    },
                  }}
                >
                  <ArrowForwardIos />
                </IconButton>

                {/* Main Image */}
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
                      borderRadius: '8px',
                    }}
                  />

                  {/* Photo Info */}
                  <Box
                    sx={{
                      mt: 2,
                      textAlign: 'center',
                      color: 'white',
                      maxWidth: 600,
                      px: 3,
                    }}
                  >
                    <Typography
                      variant='h5'
                      sx={{
                        fontFamily: "'Dancing Script', cursive",
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {selectedPhoto.title}
                    </Typography>
                    {selectedPhoto.description && (
                      <Typography
                        variant='body1'
                        sx={{
                          color: 'rgba(255,255,255,0.8)',
                          mb: 2,
                          lineHeight: 1.6,
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
