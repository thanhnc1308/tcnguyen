'use client';

import { useState } from 'react';
import { Box, Typography, Card, Button } from '@mui/material';
import { ContentCopy } from '@mui/icons-material';
import Image from 'next/image';
import { BANK_ACCOUNTS } from '@/constants/wedding';
import toast from 'react-hot-toast';
import { COLORS, FONTS } from '../constants/design';
import ScrollReveal from './ScrollReveal';

interface WeddingMonetaryGiftProps {
  buttonVariant?: 'contained' | 'outlined' | 'text';
  buttonSize?: 'small' | 'medium' | 'large';
}

export default function WeddingMonetaryGift({}: WeddingMonetaryGiftProps) {
  const [showContent, setShowContent] = useState(false);

  const handleCopyAccount = (account: (typeof BANK_ACCOUNTS)[0]) => {
    navigator.clipboard.writeText(account.accountNumber);
    toast.success('Đã sao chép số tài khoản');
  };

  return (
    <Box sx={{ px: 3, pb: { xs: 8, md: 10 }, backgroundColor: COLORS.bgCream }}>
      {!showContent ? (
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant='outlined'
            onClick={() => setShowContent(true)}
            sx={{
              borderColor: COLORS.textSecondary,
              color: COLORS.textPrimary,
              fontFamily: FONTS.body,
              fontSize: '0.85rem',
              py: 1.5,
              px: 4,
              borderRadius: 0,
              textTransform: 'none',
              letterSpacing: '0.05em',
              boxShadow: 'none',
              '&:hover': {
                borderColor: COLORS.textPrimary,
                backgroundColor: 'transparent',
              },
            }}
          >
            Xem thông tin chuyển khoản
          </Button>
        </Box>
      ) : (
        <ScrollReveal>
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              maxWidth: 700,
              mx: 'auto',
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            {BANK_ACCOUNTS.map((account) => (
              <Card
                key={account.id}
                sx={{
                  flex: 1,
                  backgroundColor: COLORS.bgWhite,
                  borderRadius: 0,
                  boxShadow: 'none',
                  border: `1px solid ${COLORS.borderGold}`,
                  p: 3,
                }}
              >
                {/* Title */}
                <Typography
                  sx={{
                    textAlign: 'center',
                    color: COLORS.textSecondary,
                    fontSize: '0.7rem',
                    mb: 1,
                    fontWeight: 500,
                    fontFamily: FONTS.body,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                >
                  {account.title}
                </Typography>

                {/* Name */}
                <Typography
                  sx={{
                    textAlign: 'center',
                    fontWeight: 400,
                    fontSize: '1.2rem',
                    mb: 2,
                    color: COLORS.textPrimary,
                    fontFamily: FONTS.serif,
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
                      width: 160,
                      height: 160,
                      position: 'relative',
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
                  {[
                    { label: 'Tên tài khoản', value: account.accountName },
                    { label: 'Số tài khoản', value: account.accountNumber },
                    { label: 'Ngân hàng', value: account.bankName },
                  ].map((item) => (
                    <Box
                      key={item.label}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mb: 1.5,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '0.8rem',
                          color: COLORS.textSecondary,
                          fontFamily: FONTS.body,
                        }}
                      >
                        {item.label}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '0.8rem',
                          color: COLORS.textPrimary,
                          fontWeight: 500,
                          textAlign: 'right',
                          fontFamily: FONTS.body,
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Copy Button */}
                <Button
                  fullWidth
                  variant='outlined'
                  startIcon={<ContentCopy sx={{ fontSize: 16 }} />}
                  onClick={() => handleCopyAccount(account)}
                  sx={{
                    borderColor: COLORS.textSecondary,
                    color: COLORS.textPrimary,
                    textTransform: 'none',
                    fontWeight: 400,
                    fontSize: '0.8rem',
                    py: 1,
                    borderRadius: 0,
                    fontFamily: FONTS.body,
                    letterSpacing: '0.05em',
                    '&:hover': {
                      borderColor: COLORS.textPrimary,
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  Sao chép số tài khoản
                </Button>
              </Card>
            ))}
          </Box>
        </ScrollReveal>
      )}
    </Box>
  );
}
