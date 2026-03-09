'use client';

import { Box, Typography, Container } from '@mui/material';
import { useWeddingInvitation } from '@/features/invitation/context/WeddingInvitationContext';
import { Guest } from '@/types/guest';
import { BRIDE_NAME, GROOM_NAME } from '@/constants/wedding';
import { getGuestPronoun } from '../helpers/guest';
import { COLORS, FONTS } from '../constants/design';

export default function Envelop({ guest }: { guest: Guest | null }) {
  const { handleOpenInvitation } = useWeddingInvitation();
  const guestPronoun = getGuestPronoun(guest);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: COLORS.bgWhite,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth='sm' sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            textAlign: 'center',
            py: { xs: 8, sm: 12 },
          }}
        >
          {/* Small botanical accent */}
          <svg
            width='30'
            height='40'
            viewBox='0 0 30 40'
            fill='none'
            style={{ margin: '0 auto 32px', display: 'block', opacity: 0.35 }}
          >
            <path d='M15 38V12' stroke={COLORS.accent} strokeWidth='0.8' />
            <ellipse cx='9' cy='14' rx='4' ry='7' transform='rotate(-15 9 14)' fill='none' stroke={COLORS.accent} strokeWidth='0.7' />
            <ellipse cx='21' cy='12' rx='4' ry='7' transform='rotate(15 21 12)' fill='none' stroke={COLORS.accent} strokeWidth='0.7' />
            <ellipse cx='8' cy='24' rx='3' ry='5' transform='rotate(-20 8 24)' fill='none' stroke={COLORS.accent} strokeWidth='0.7' />
            <ellipse cx='22' cy='22' rx='3' ry='5' transform='rotate(20 22 22)' fill='none' stroke={COLORS.accent} strokeWidth='0.7' />
          </svg>

          {/* Header Text */}
          <Typography
            sx={{
              fontSize: '0.75rem',
              fontFamily: FONTS.body,
              fontWeight: 400,
              letterSpacing: '0.3em',
              color: COLORS.textSecondary,
              mb: 5,
              textTransform: 'uppercase',
            }}
          >
            {guest?.name || ''}, {guestPronoun} nhận được thư của
          </Typography>

          {/* Couple Names */}
          <Typography
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontFamily: FONTS.serif,
              color: COLORS.textPrimary,
              fontWeight: 300,
              mb: 6,
              lineHeight: 1.2,
              letterSpacing: '0.02em',
            }}
          >
            {GROOM_NAME} & {BRIDE_NAME}
          </Typography>

          {/* Thin rule */}
          <Box sx={{ width: 40, height: '1px', backgroundColor: COLORS.accent, opacity: 0.3, mx: 'auto', mb: 6 }} />

          {/* Open button */}
          <Box
            sx={{
              cursor: 'pointer',
              display: 'inline-block',
              transition: 'opacity 0.3s ease',
              '&:hover': {
                opacity: 0.7,
              },
            }}
            onClick={handleOpenInvitation}
          >
            <Typography
              sx={{
                fontSize: '0.8rem',
                fontWeight: 400,
                color: COLORS.textPrimary,
                fontFamily: FONTS.body,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                borderBottom: `1px solid ${COLORS.textPrimary}`,
                paddingBottom: '4px',
              }}
            >
              Mở thư
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
