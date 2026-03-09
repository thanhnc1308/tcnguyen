'use client';

import { Box, Typography, Container, Tooltip } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import { COLORS, FONTS } from '../constants/design';

export default function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        py: 4,
        mt: 0,
        backgroundColor: COLORS.bgWarm,
        borderTop: `2px solid ${COLORS.borderWoodblock}`,
        position: 'relative',
        // Woodblock pattern top
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: `repeating-linear-gradient(90deg, ${COLORS.indigo}, ${COLORS.indigo} 6px, transparent 6px, transparent 10px)`,
          opacity: 0.15,
        },
      }}
    >
      <Container maxWidth='lg'>
        <Box sx={{ textAlign: 'center' }}>
          {/* Main Thank You Message */}
          <Typography
            variant='h5'
            component='p'
            sx={{
              fontFamily: FONTS.script,
              color: COLORS.indigo,
              fontWeight: 600,
              mb: 3,
              fontSize: { xs: '1.5rem', md: '2rem' },
              lineHeight: 1.4,
            }}
          >
            Thành & Mến cảm ơn mọi người!
          </Typography>

          {/* Made with Love Message */}
          <Typography
            variant='body1'
            component='p'
            sx={{
              color: COLORS.textSecondary,
              fontSize: { xs: '0.9rem', md: '1rem' },
              fontWeight: 400,
              fontFamily: FONTS.serif,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.5,
              flexWrap: 'wrap',
              lineHeight: 1.6,
            }}
          >
            Made by{' '}
            <Tooltip title='and lots of help from AI :v' arrow placement='top'>
              <Box
                component='span'
                sx={{
                  fontWeight: 700,
                  color: COLORS.indigo,
                  cursor: 'help',
                  textDecoration: 'underline',
                  textDecorationStyle: 'dotted',
                  textUnderlineOffset: '3px',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    color: COLORS.primary,
                    textDecorationColor: COLORS.primary,
                  },
                }}
              >
                Thành
              </Box>
            </Tooltip>{' '}
            with lots of{' '}
            <Favorite
              sx={{
                color: COLORS.primary,
                fontSize: '1.2rem',
                animation: 'gentleFloat 3s ease-in-out infinite',
              }}
            />{' '}
            for{' '}
            <Box
              component='span'
              sx={{
                fontWeight: 700,
                color: COLORS.primary,
                fontFamily: FONTS.script,
                fontSize: '1.2em',
              }}
            >
              Mến
            </Box>
          </Typography>

          {/* Decorative lotus dots */}
          <Box
            sx={{
              mt: 3,
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              opacity: 0.4,
            }}
          >
            {[COLORS.primary, COLORS.indigo, COLORS.accent, COLORS.indigo, COLORS.primary].map((color, index) => (
              <Box
                key={index}
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: color,
                  animation: `gentleFloat ${3 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.3}s`,
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
