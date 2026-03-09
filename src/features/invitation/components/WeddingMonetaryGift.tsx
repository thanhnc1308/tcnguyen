'use client';

import { useState } from 'react';
import { Box, Typography, Card, Button } from '@mui/material';
import { ContentCopy } from '@mui/icons-material';
import Image from 'next/image';
import { BANK_ACCOUNTS } from '@/constants/wedding';
import toast from 'react-hot-toast';
import { COLORS, FONTS, TRANSITIONS, cardStyle } from '../constants/design';
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
    <Box sx={{ p: 3, backgroundColor: COLORS.bgBlack }}>
      {!showContent ? (
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant='contained'
            onClick={() => setShowContent(true)}
            sx={{
              backgroundColor: 'transparent',
              color: COLORS.accent,
              fontFamily: FONTS.body,
              fontSize: '0.8rem',
              py: 1.5,
              px: 5,
              borderRadius: 0,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              fontWeight: 500,
              border: `1px solid ${COLORS.accent}`,
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: COLORS.accent,
                color: COLORS.textOnPrimary,
                boxShadow: '0 4px 20px rgba(198, 169, 97, 0.3)',
              },
              transition: `all ${TRANSITIONS.normal} ease`,
            }}
          >
            Nếu bạn muốn gửi quà mừng ...
          </Button>
        </Box>
      ) : (
        <ScrollReveal>
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
                  ...cardStyle,
                  p: 3,
                  borderRadius: 1,
                  '&:hover': {
                    ...cardStyle['&:hover'],
                  },
                }}
              >
                {/* Title */}
                <Typography
                  sx={{
                    textAlign: 'center',
                    color: COLORS.accent,
                    fontSize: '0.75rem',
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
                    fontSize: '1.4rem',
                    mb: 0.5,
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
                      width: 200,
                      height: 200,
                      position: 'relative',
                      border: `1px solid ${COLORS.borderGold}`,
                      overflow: 'hidden',
                      backgroundColor: '#fff',
                      p: 1,
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
                          fontWeight: 400,
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

                {/* Large Account Number Display */}
                <Box
                  sx={{
                    backgroundColor: 'rgba(198, 169, 97, 0.08)',
                    border: `1px solid ${COLORS.borderGold}`,
                    py: 2,
                    mb: 2,
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1.4rem',
                      fontWeight: 300,
                      color: COLORS.accent,
                      letterSpacing: '3px',
                      fontFamily: FONTS.serif,
                    }}
                  >
                    {account.accountNumber}
                  </Typography>
                </Box>

                {/* Copy Button */}
                <Button
                  fullWidth
                  variant='outlined'
                  startIcon={<ContentCopy sx={{ fontSize: 16 }} />}
                  onClick={() => handleCopyAccount(account)}
                  sx={{
                    borderColor: COLORS.borderGold,
                    color: COLORS.accent,
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    fontSize: '0.75rem',
                    py: 1.2,
                    borderRadius: 0,
                    fontFamily: FONTS.body,
                    letterSpacing: '0.1em',
                    transition: `all ${TRANSITIONS.normal} ease`,
                    '&:hover': {
                      borderColor: COLORS.accent,
                      backgroundColor: 'rgba(198, 169, 97, 0.08)',
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
