'use client';

import { Box, Typography, Container } from '@mui/material';
import { COLORS, FONTS } from '../constants/design';

export default function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        py: 6,
        mt: 0,
        backgroundColor: COLORS.bgBlack,
        borderTop: `1px solid ${COLORS.borderGold}`,
        position: 'relative',
      }}
    >
      <Container maxWidth='lg'>
        <Box sx={{ textAlign: 'center' }}>
          {/* Main Thank You Message */}
          <Typography
            variant='h5'
            component='p'
            sx={{
              fontFamily: FONTS.serif,
              color: COLORS.accent,
              mb: 3,
              fontSize: { xs: '1.6rem', md: '2rem' },
              lineHeight: 1.4,
              fontWeight: 300,
              fontStyle: 'italic',
            }}
          >
            Thành & Mến cảm ơn mọi người!
          </Typography>

          {/* Thin gold line */}
          <Box
            sx={{
              width: 60,
              height: '1px',
              backgroundColor: COLORS.accent,
              opacity: 0.3,
              mx: 'auto',
              mb: 3,
            }}
          />

          {/* Made with Love Message */}
          <Typography
            variant='body1'
            component='p'
            sx={{
              color: COLORS.textSecondary,
              fontSize: { xs: '0.8rem', md: '0.85rem' },
              fontWeight: 300,
              fontFamily: FONTS.body,
              letterSpacing: '0.05em',
            }}
          >
            Made by{' '}
            <Box
              component='span'
              sx={{
                fontWeight: 500,
                color: COLORS.textPrimary,
              }}
            >
              Thành
            </Box>
            {' '}with love for{' '}
            <Box
              component='span'
              sx={{
                fontWeight: 500,
                color: COLORS.accent,
                fontFamily: FONTS.script,
                fontSize: '1.1em',
              }}
            >
              Mến
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
