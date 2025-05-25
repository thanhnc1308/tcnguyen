'use client';

import { useState } from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Card,
  CardMedia,
} from '@mui/material';
import { Close, ZoomIn } from '@mui/icons-material';
import Image from 'next/image';

interface ImageItem {
  id: string;
  title: string;
  thumbnailUrl: string;
  fullImageUrl: string;
  alt: string;
}

interface WeddingMonetaryGiftProps {
  images?: ImageItem[];
  title?: string;
  buttonVariant?: 'contained' | 'outlined' | 'text';
  buttonSize?: 'small' | 'medium' | 'large';
}

export default function WeddingMonetaryGift({
  images = [
    {
      id: '1',
      title: 'QR chú rể',
      thumbnailUrl: '/images/gift-box-groom.png',
      fullImageUrl: '/images/gift-box-groom.png',
      alt: 'QR chú rể',
    },
    {
      id: '2',
      title: 'QR cô dâu',
      thumbnailUrl: '/images/gift-box-bride.png',
      fullImageUrl: '/images/gift-box-bride.png',
      alt: 'QR cô dâu',
    },
  ],
  title = 'Mừng cưới',
}: WeddingMonetaryGiftProps) {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleImageClick = (image: ImageItem) => {
    setSelectedImage(image);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Gallery Title */}
      <Typography
        variant='h4'
        component='h2'
        sx={{
          textAlign: 'center',
          mb: 4,
          fontFamily: "'Dancing Script', cursive",
          color: '#6b7280',
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>

      {/* Image Buttons Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 3,
          maxWidth: 800,
          mx: 'auto',
        }}
      >
        {images.map((image) => (
          <Card
            key={image.id}
            sx={{
              position: 'relative',
              borderRadius: 2,
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
              },
            }}
            onClick={() => handleImageClick(image)}
          >
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component='img'
                height='200'
                image={image.thumbnailUrl}
                alt={image.alt}
                sx={{
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />

              {/* Overlay with zoom icon */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  '&:hover': {
                    opacity: 1,
                  },
                }}
              >
                <ZoomIn sx={{ color: 'white', fontSize: 40 }} />
              </Box>
            </Box>
          </Card>
        ))}
      </Box>

      {/* Image Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth='lg'
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pb: 1,
          }}
        >
          <Typography
            variant='body1'
            sx={{
              fontFamily: "'Dancing Script', cursive",
              color: '#6b7280',
              fontWeight: 600,
            }}
          >
            {selectedImage?.title}
          </Typography>
          <IconButton
            onClick={handleCloseDialog}
            sx={{
              color: '#6b7280',
              '&:hover': {
                backgroundColor: 'rgba(107, 114, 128, 0.1)',
              },
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ p: 0 }}>
          {selectedImage && (
            <Box>
              <Image
                src={selectedImage.fullImageUrl || '/placeholder.svg'}
                width={800}
                height={600}
                alt={selectedImage.alt}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
