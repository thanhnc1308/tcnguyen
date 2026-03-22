'use client';

import { Box, Typography } from '@mui/material';
import { COLORS, FONTS } from '../constants/design';
import ScrollReveal from './ScrollReveal';
import { Guest, GuestAgeComparison } from '@/types/guest';
import { getGuestPronoun } from '@/utils/guest';

export default function GiftMessage({ guest }: { guest: Guest | null }) {
  const { guestPronoun, wePronoun } = getGuestPronoun(
    guest?.ageComparison ?? GuestAgeComparison.Same,
    guest?.gender,
  );

  return (
    <Box
      sx={{
        textAlign: 'center',
        px: 3,
        backgroundColor: COLORS.bgCream,
      }}
    >
      <ScrollReveal>
        <Typography
          sx={{
            fontFamily: FONTS.script,
            fontSize: { xs: '1.5rem', sm: '1.8rem' },
            color: COLORS.primary,
            lineHeight: 1.6,
            maxWidth: 500,
            mx: 'auto',
          }}
        >
          Sự hiện diện và lời chúc của {guestPronoun.toLowerCase()} là món quà
          quý giá nhất đối với {wePronoun.toLowerCase()}!
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '1rem', sm: '1rem' },
            color: COLORS.textSecondary,
            lineHeight: 1.8,
            maxWidth: 450,
            mx: 'auto',
            fontFamily: FONTS.serif,
          }}
        >
          Nếu {guestPronoun.toLowerCase()} muốn gửi gắm thêm tình cảm, có thể
          tìm thấy thông tin bên dưới đây. {wePronoun} vô cùng trân trọng.
        </Typography>
      </ScrollReveal>
    </Box>
  );
}
