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
        background: COLORS.bgBlack,
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
            px: { xs: 3, sm: 6 },
          }}
        >
          {/* Thin gold line */}
          <Box
            sx={{
              width: '1px',
              height: 60,
              backgroundColor: COLORS.accent,
              opacity: 0.4,
              mx: 'auto',
              mb: 4,
            }}
          />

          {/* Header Text */}
          <Typography
            sx={{
              fontSize: { xs: '0.7rem', sm: '0.75rem' },
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
              fontSize: { xs: '3.5rem', sm: '4.5rem', md: '5.5rem' },
              fontFamily: FONTS.script,
              color: COLORS.textPrimary,
              mb: 6,
              lineHeight: 1.1,
            }}
          >
            {GROOM_NAME} & {BRIDE_NAME}
          </Typography>

          {/* Diamond separator */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 6 }}>
            <Box sx={{ width: 40, height: '1px', backgroundColor: COLORS.accent, opacity: 0.3 }} />
            <Box sx={{ width: 6, height: 6, transform: 'rotate(45deg)', backgroundColor: COLORS.accent, opacity: 0.5 }} />
            <Box sx={{ width: 40, height: '1px', backgroundColor: COLORS.accent, opacity: 0.3 }} />
          </Box>

          {/* Open Envelope Button */}
          <Box
            sx={{
              cursor: 'pointer',
              display: 'inline-block',
              border: `1px solid ${COLORS.accent}`,
              color: COLORS.accent,
              px: 5,
              py: 1.5,
              fontFamily: FONTS.body,
              fontWeight: 500,
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: COLORS.accent,
                color: COLORS.textOnPrimary,
                boxShadow: '0 4px 20px rgba(198, 169, 97, 0.3)',
              },
            }}
            onClick={handleOpenInvitation}
          >
            Mở thư mời
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
