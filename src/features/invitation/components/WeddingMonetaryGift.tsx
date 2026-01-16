'use client';

import { useState } from 'react';
import { Box, Typography, Card, Button } from '@mui/material';
import { ContentCopy } from '@mui/icons-material';
import Image from 'next/image';
import { BANK_ACCOUNTS } from '@/constants/wedding';

interface WeddingMonetaryGiftProps {
  buttonVariant?: 'contained' | 'outlined' | 'text';
  buttonSize?: 'small' | 'medium' | 'large';
}

export default function WeddingMonetaryGift({}: WeddingMonetaryGiftProps) {
  const [showContent, setShowContent] = useState(false);

  const handleCopyAccount = (account: (typeof BANK_ACCOUNTS)[0]) => {
    navigator.clipboard.writeText(account.accountNumber);
  };

  return (
    <Box sx={{ p: 3, backgroundColor: '#f5e6d3' }}>
      {!showContent ? (
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant='contained'
            onClick={() => setShowContent(true)}
            sx={{
              backgroundColor: '#8b4513',
              color: 'white',
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.2rem',
              py: 2,
              px: 4,
              borderRadius: 3,
              textTransform: 'none',
              boxShadow: '0 4px 12px rgba(139, 69, 19, 0.3)',
              '&:hover': {
                backgroundColor: '#6b3410',
                boxShadow: '0 6px 16px rgba(139, 69, 19, 0.4)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Nếu bạn muốn gửi quà mừng ...
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            maxWidth: 900,
            mx: 'auto',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {BANK_ACCOUNTS.map((account) => (
            <Card
              key={account.id}
              sx={{
                flex: 1,
                backgroundColor: 'white',
                borderRadius: 4,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                p: 3,
              }}
            >
              {/* Title */}
              <Typography
                sx={{
                  textAlign: 'center',
                  color: '#999',
                  fontSize: '0.9rem',
                  mb: 1,
                  fontWeight: 500,
                }}
              >
                {account.title}
              </Typography>

              {/* Name */}
              <Typography
                sx={{
                  textAlign: 'center',
                  fontWeight: 700,
                  fontSize: '1.3rem',
                  mb: 0.5,
                  color: '#333',
                }}
              >
                {account.name}
              </Typography>

              {/* QR Code */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 200,
                    height: 200,
                    position: 'relative',
                    border: '1px solid #eee',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={account.qrCode}
                    alt={`QR ${account.name}`}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              </Box>

              {/* Account Details */}
              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      color: '#666',
                      fontWeight: 500,
                    }}
                  >
                    Tên tài khoản
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      color: '#333',
                      fontWeight: 600,
                      textAlign: 'right',
                    }}
                  >
                    {account.accountName}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      color: '#666',
                      fontWeight: 500,
                    }}
                  >
                    Số tài khoản
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      color: '#333',
                      fontWeight: 600,
                    }}
                  >
                    {account.accountNumber}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      color: '#666',
                      fontWeight: 500,
                    }}
                  >
                    Ngân hàng
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      color: '#333',
                      fontWeight: 600,
                    }}
                  >
                    {account.bankName}
                  </Typography>
                </Box>
              </Box>

              {/* Large Account Number Display */}
              <Box
                sx={{
                  backgroundColor: '#f8f9fa',
                  borderRadius: 2,
                  py: 2,
                  mb: 2,
                  textAlign: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#333',
                    letterSpacing: '2px',
                    fontFamily: 'monospace',
                  }}
                >
                  {account.accountNumber}
                </Typography>
              </Box>

              {/* Copy Button */}
              <Button
                fullWidth
                variant='outlined'
                startIcon={<ContentCopy sx={{ fontSize: 18 }} />}
                onClick={() => handleCopyAccount(account)}
                sx={{
                  borderColor: '#fbbf24',
                  color: '#f59e0b',
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  py: 1.2,
                  borderRadius: 2,
                  '&:hover': {
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(251, 191, 36, 0.04)',
                  },
                }}
              >
                Sao chép số tài khoản
              </Button>
            </Card>
          ))}
        </Box>
      )}
    </Box>
  );
}
