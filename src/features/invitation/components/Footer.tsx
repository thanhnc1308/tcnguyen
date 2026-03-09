'use client';

import { Box, Typography, Container, Tooltip } from '@mui/material';
import { COLORS, FONTS } from '../constants/design';

export default function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        py: 6,
        backgroundColor: COLORS.bgWhite,
        borderTop: `1px solid ${COLORS.borderGold}`,
      }}
    >
      <Container maxWidth='sm'>
        <Box sx={{ textAlign: 'center' }}>
          {/* Thank You */}
          <Typography
            sx={{
              fontFamily: FONTS.serif,
              color: COLORS.textPrimary,
              fontWeight: 300,
              mb: 3,
              fontSize: { xs: '1.3rem', md: '1.6rem' },
              fontStyle: 'italic',
            }}
          >
            Thành & Mến cảm ơn mọi người
          </Typography>

          {/* Made with love */}
          <Typography
            sx={{
              color: COLORS.textSecondary,
              fontSize: '0.75rem',
              fontFamily: FONTS.body,
              letterSpacing: '0.1em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.5,
            }}
          >
            Made by{' '}
            <Tooltip title='and lots of help from AI :v' arrow placement='top'>
              <Box
                component='span'
                sx={{
                  cursor: 'help',
                  textDecoration: 'underline',
                  textDecorationStyle: 'dotted',
                  textUnderlineOffset: '3px',
                  '&:hover': {
                    color: COLORS.rose,
                  },
                }}
              >
                Thành
              </Box>
            </Tooltip>
            {' '}with love for{' '}
            <Box
              component='span'
              sx={{
                color: COLORS.rose,
                fontFamily: FONTS.script,
                fontSize: '1em',
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
