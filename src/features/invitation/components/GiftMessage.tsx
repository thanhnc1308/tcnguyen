'use client';

import { Box, Typography } from '@mui/material';
import { COLORS, FONTS } from '../constants/design';
import ScrollReveal from './ScrollReveal';

export default function GiftMessage() {
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
          Sự hiện diện và lời chúc của bạn là món quà quý giá nhất đối với chúng
          mình!
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
          Nếu bạn muốn gửi gắm thêm tình cảm, có thể tìm thấy thông tin bên dưới
          đây. Chúng mình vô cùng trân trọng.
        </Typography>
      </ScrollReveal>
    </Box>
  );
}
