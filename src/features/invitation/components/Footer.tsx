'use client';

import { Box, Typography, Container } from '@mui/material';
import { Favorite } from '@mui/icons-material';

interface FooterProps {
  backgroundColor?: string;
  textColor?: string;
  heartColor?: string;
  showBackground?: boolean;
}

export default function Footer({
  backgroundColor = 'rgba(255, 255, 255, 0.9)',
  textColor = '#6b7280',
  heartColor = '#ff6b6b',
  showBackground = true,
}: FooterProps) {
  return (
    <Box
      component='footer'
      sx={{
        py: 4,
        mt: 6,
        backgroundColor: showBackground ? backgroundColor : 'transparent',
        backdropFilter: showBackground ? 'blur(10px)' : 'none',
        borderTop: showBackground
          ? '1px solid rgba(107, 114, 128, 0.1)'
          : 'none',
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
              fontFamily: "'Dancing Script', cursive",
              color: textColor,
              fontWeight: 600,
              mb: 3,
              fontSize: { xs: '1.5rem', md: '2rem' },
              lineHeight: 1.4,
            }}
          >
            Thành & Mến cảm ơn mọi người!
          </Typography>

          {/* Decorative Hearts */}
          <Box
            sx={{
              mt: 3,
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              opacity: 0.6,
            }}
          >
            {[...Array(3)].map((_, index) => (
              <Favorite
                key={index}
                sx={{
                  color: heartColor,
                  fontSize: '0.8rem',
                  animation: `float ${2 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.3}s`,
                  '@keyframes float': {
                    '0%, 100%': {
                      transform: 'translateY(0px)',
                    },
                    '50%': {
                      transform: 'translateY(-5px)',
                    },
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
