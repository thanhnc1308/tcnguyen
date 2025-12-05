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
  CardContent,
  GridLegacy as Grid,
  Divider,
  Chip,
} from '@mui/material';
import { AccountBalance, Close, CreditCard, ZoomIn } from '@mui/icons-material';
import Image from 'next/image';

const accounts = [
  {
    id: '1',
    bankName: 'Vietcombank',
    accountNumber: '1234567890123',
    accountName: 'NGUYEN VAN THANH',
    bankColor: '#1976d2',
    note: 'Tài khoản chính',
  },
];

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
          {/* Bank Accounts Grid */}
          <Grid container spacing={3}>
            {accounts.map((account) => (
              <Grid item xs={12} md={6} key={account.id}>
                <Card
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: 3,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    {/* Bank Header */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: 2,
                          backgroundColor: account.bankColor || '#8b4513',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                        }}
                      >
                        <AccountBalance sx={{ color: 'white', fontSize: 24 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant='h6'
                          sx={{
                            color: '#5d4037',
                            fontWeight: 700,
                            fontSize: '1.2rem',
                            mb: 0.5,
                          }}
                        >
                          {account.bankName}
                        </Typography>
                        {account.note && (
                          <Chip
                            label={account.note}
                            size='small'
                            sx={{
                              backgroundColor: account.bankColor || '#8b4513',
                              color: 'white',
                              fontSize: '0.7rem',
                              height: 20,
                            }}
                          />
                        )}
                      </Box>
                    </Box>

                    <Divider
                      sx={{ mb: 3, borderColor: 'rgba(139, 69, 19, 0.2)' }}
                    />

                    {/* Account Number */}
                    <Box sx={{ mb: 3 }}>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
                      >
                        <CreditCard
                          sx={{ color: '#8b4513', mr: 1, fontSize: 20 }}
                        />
                        <Typography
                          variant='body2'
                          sx={{
                            color: '#6b4423',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                          }}
                        >
                          Số tài khoản
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          backgroundColor: 'rgba(139, 69, 19, 0.05)',
                          borderRadius: 2,
                          p: 2,
                          border: '1px dashed rgba(139, 69, 19, 0.2)',
                        }}
                      >
                        <Typography
                          variant='h6'
                          sx={{
                            flex: 1,
                            color: '#5d4037',
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            fontFamily: 'monospace',
                            letterSpacing: '1px',
                          }}
                        >
                          {account.accountNumber}
                        </Typography>
                        <IconButton
                          onClick={() =>
                            console.log(account.accountNumber, 'số tài khoản')
                          }
                          sx={{
                            color: '#8b4513',
                            '&:hover': {
                              backgroundColor: 'rgba(139, 69, 19, 0.1)',
                            },
                          }}
                        ></IconButton>
                      </Box>
                    </Box>

                    {/* Account Name */}
                    <Box sx={{ mb: 3 }}>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
                      >
                        <Typography
                          variant='body2'
                          sx={{
                            color: '#6b4423',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                          }}
                        >
                          Tên tài khoản
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          backgroundColor: 'rgba(139, 69, 19, 0.05)',
                          borderRadius: 2,
                          p: 2,
                          border: '1px dashed rgba(139, 69, 19, 0.2)',
                        }}
                      >
                        <Typography
                          variant='body1'
                          sx={{
                            flex: 1,
                            color: '#5d4037',
                            fontWeight: 600,
                            fontSize: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                          }}
                        >
                          {account.accountName}
                        </Typography>
                        <IconButton
                          onClick={() => console.log(account.accountName)}
                          sx={{
                            color: '#8b4513',
                            '&:hover': {
                              backgroundColor: 'rgba(139, 69, 19, 0.1)',
                            },
                          }}
                        ></IconButton>
                      </Box>
                    </Box>

                    {/* Copy All Button */}
                    {
                      <Box
                        sx={{
                          p: 2,
                          backgroundColor: 'rgba(139, 69, 19, 0.05)',
                          borderRadius: 2,
                          border: '1px solid rgba(139, 69, 19, 0.1)',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(139, 69, 19, 0.1)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                        onClick={() => console.log(account)}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Typography
                            variant='body2'
                            sx={{
                              color: '#8b4513',
                              fontWeight: 600,
                              fontSize: '0.9rem',
                            }}
                          >
                            Sao chép toàn bộ thông tin
                          </Typography>
                        </Box>
                      </Box>
                    }
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
