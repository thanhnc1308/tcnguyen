'use client';

import { Box, Typography } from '@mui/material';
import { COLORS, FONTS } from '../constants/design';
import ScrollReveal from './ScrollReveal';
import { Guest, GuestAgeComparison } from '@/types/guest';
import { getGuestPronoun } from '@/utils/guest';

export default function InvitationHeading({ guest }: { guest: Guest | null }) {
  const { guestPronoun, wePronoun } = getGuestPronoun(
    guest?.ageComparison ?? GuestAgeComparison.Same,
    guest?.gender,
  );

  return (
    <Box
      sx={{
        textAlign: 'center',
        py: { xs: 2, md: 2 },
        pb: '0 !important',
        px: 3,
        backgroundColor: COLORS.bgCream,
      }}
    >
      <ScrollReveal>
        <Typography
          sx={{
            fontFamily: FONTS.serif,
            fontSize: { xs: '0.8rem', sm: '1rem' },
            color: COLORS.textSecondary,
            lineHeight: 1.8,
            maxWidth: 550,
            mx: 'auto',
            letterSpacing: '0.02em',
          }}
        >
          TRÂN TRỌNG KÍNH MỜI {guestPronoun.toUpperCase()} TỚI THAM DỰ TIỆC
          <br />
          CHUNG VUI CÙNG {wePronoun.toUpperCase()}
          <br />
          Vào lúc
        </Typography>
      </ScrollReveal>
    </Box>
  );
}
