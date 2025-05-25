'use client';

import { useState } from 'react';
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
  GridLegacy as Grid,
  Card,
  CardMedia,
  Chip,
  Container,
} from '@mui/material';
import {
  Close,
  ArrowBackIos,
  ArrowForwardIos,
  Favorite,
  CameraAlt,
  Download,
} from '@mui/icons-material';

interface WeddingPhoto {
  id: string;
  title: string;
  category: string;
  thumbnailUrl: string;
  fullImageUrl: string;
  alt: string;
  photographer?: string;
  date?: string;
  description?: string;
}

interface PhotoGalleryProps {
  photos?: WeddingPhoto[];
  title?: string;
  showCategories?: boolean;
  columns?: { xs: number; sm: number; md: number; lg: number };
}

export default function PhotoGallery({
  photos = [
    {
      id: '1',
      title: 'Getting Ready',
      category: 'Preparation',
      thumbnailUrl: '/placeholder.svg?height=300&width=400&text=Getting+Ready',
      fullImageUrl:
        '/placeholder.svg?height=800&width=1200&text=Getting+Ready+Full',
      alt: 'Bride getting ready',
      photographer: 'John Smith',
      date: 'Morning',
      description: 'Beautiful moments of preparation before the ceremony',
    },
    {
      id: '2',
      title: 'First Look',
      category: 'Ceremony',
      thumbnailUrl: '/placeholder.svg?height=300&width=400&text=First+Look',
      fullImageUrl:
        '/placeholder.svg?height=800&width=1200&text=First+Look+Full',
      alt: 'First look moment',
      photographer: 'John Smith',
      date: 'Afternoon',
      description: 'The magical first look between bride and groom',
    },
    {
      id: '3',
      title: 'Walking Down the Aisle',
      category: 'Ceremony',
      thumbnailUrl: '/placeholder.svg?height=300&width=400&text=Aisle+Walk',
      fullImageUrl:
        '/placeholder.svg?height=800&width=1200&text=Aisle+Walk+Full',
      alt: 'Walking down the aisle',
      photographer: 'John Smith',
      date: 'Afternoon',
      description: "The bride's grand entrance",
    },
    {
      id: '4',
      title: 'Exchange of Vows',
      category: 'Ceremony',
      thumbnailUrl: '/placeholder.svg?height=300&width=400&text=Vows',
      fullImageUrl: '/placeholder.svg?height=800&width=1200&text=Vows+Full',
      alt: 'Exchange of vows',
      photographer: 'John Smith',
      date: 'Afternoon',
      description: 'Heartfelt vows exchanged between the couple',
    },
    {
      id: '5',
      title: 'First Kiss',
      category: 'Ceremony',
      thumbnailUrl: '/placeholder.svg?height=300&width=400&text=First+Kiss',
      fullImageUrl:
        '/placeholder.svg?height=800&width=1200&text=First+Kiss+Full',
      alt: 'First kiss as married couple',
      photographer: 'John Smith',
      date: 'Afternoon',
      description: 'The first kiss as husband and wife',
    },
    {
      id: '6',
      title: 'Couple Portraits',
      category: 'Portraits',
      thumbnailUrl: '/placeholder.svg?height=300&width=400&text=Portraits',
      fullImageUrl:
        '/placeholder.svg?height=800&width=1200&text=Portraits+Full',
      alt: 'Couple portrait',
      photographer: 'John Smith',
      date: 'Golden Hour',
      description: 'Romantic portraits during golden hour',
    },
    {
      id: '7',
      title: 'Reception Dance',
      category: 'Reception',
      thumbnailUrl: '/placeholder.svg?height=300&width=400&text=Dance',
      fullImageUrl: '/placeholder.svg?height=800&width=1200&text=Dance+Full',
      alt: 'First dance',
      photographer: 'John Smith',
      date: 'Evening',
      description: "The couple's first dance as newlyweds",
    },
    {
      id: '8',
      title: 'Celebration',
      category: 'Reception',
      thumbnailUrl: '/placeholder.svg?height=300&width=400&text=Celebration',
      fullImageUrl:
        '/placeholder.svg?height=800&width=1200&text=Celebration+Full',
      alt: 'Wedding celebration',
      photographer: 'John Smith',
      date: 'Evening',
      description: 'Joyful celebration with family and friends',
    },
  ],
  title = 'Wedding Gallery',
  showCategories = true,
  columns = { xs: 1, sm: 2, md: 3, lg: 4 },
}: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<WeddingPhoto | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Get unique categories
  const categories = [
    'All',
    ...Array.from(new Set(photos.map((photo) => photo.category))),
  ];

  // Filter photos by category
  const filteredPhotos =
    selectedCategory === 'All'
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  const handlePhotoClick = (photo: WeddingPhoto, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const handleCloseDialog = () => {
    setSelectedPhoto(null);
  };

  const handlePrevious = () => {
    const newIndex =
      currentIndex > 0 ? currentIndex - 1 : filteredPhotos.length - 1;
    setCurrentIndex(newIndex);
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex < filteredPhotos.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  const handleDownload = () => {
    if (selectedPhoto) {
      const link = document.createElement('a');
      link.href = selectedPhoto.fullImageUrl;
      link.download = `${selectedPhoto.title}.jpg`;
      link.click();
    }
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
            {title}
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: '#9ca3af',
              fontWeight: 300,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Capturing the most precious moments of our special day
          </Typography>
        </Box>

        {/* Category Filter */}
        {showCategories && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 4,
              flexWrap: 'wrap',
              gap: 1,
            }}
          >
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'filled' : 'outlined'}
                sx={{
                  backgroundColor:
                    selectedCategory === category ? '#6b7280' : 'transparent',
                  color: selectedCategory === category ? 'white' : '#6b7280',
                  borderColor: '#6b7280',
                  '&:hover': {
                    backgroundColor:
                      selectedCategory === category
                        ? '#4b5563'
                        : 'rgba(107, 114, 128, 0.1)',
                  },
                  fontWeight: 500,
                  px: 2,
                  py: 1,
                }}
              />
            ))}
          </Box>
        )}

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
            {filteredPhotos.map((photo, index) => (
              <Grid
                item
                xs={columns.xs}
                sm={columns.sm}
                md={columns.md}
                lg={columns.lg}
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
                    <Typography
                      variant='body2'
                      sx={{
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '0.875rem',
                      }}
                    >
                      {photo.category} • {photo.date}
                    </Typography>
                  </Box>

                  {/* Category Badge */}
                  <Chip
                    label={photo.category}
                    size='small'
                    sx={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      color: '#6b7280',
                      fontWeight: 500,
                      fontSize: '0.75rem',
                    }}
                  />
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

                {/* Download Button */}
                <IconButton
                  onClick={handleDownload}
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 80,
                    color: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    zIndex: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.2)',
                    },
                  }}
                >
                  <Download />
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
                  <img
                    src={selectedPhoto.fullImageUrl || '/placeholder.svg'}
                    alt={selectedPhoto.alt}
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
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 3,
                        flexWrap: 'wrap',
                      }}
                    >
                      {selectedPhoto.photographer && (
                        <Box
                          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                        >
                          <CameraAlt
                            sx={{
                              fontSize: 16,
                              color: 'rgba(255,255,255,0.6)',
                            }}
                          />
                          <Typography
                            variant='body2'
                            sx={{ color: 'rgba(255,255,255,0.6)' }}
                          >
                            {selectedPhoto.photographer}
                          </Typography>
                        </Box>
                      )}
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                      >
                        <Favorite
                          sx={{ fontSize: 16, color: 'rgba(255,255,255,0.6)' }}
                        />
                        <Typography
                          variant='body2'
                          sx={{ color: 'rgba(255,255,255,0.6)' }}
                        >
                          {selectedPhoto.category} • {selectedPhoto.date}
                        </Typography>
                      </Box>
                    </Box>
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
