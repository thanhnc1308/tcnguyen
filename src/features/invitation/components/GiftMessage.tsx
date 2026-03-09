'use client';

import { Box, Typography } from '@mui/material';
import { COLORS, FONTS } from '../constants/design';
import OrnamentalDivider from './OrnamentalDivider';
import ScrollReveal from './ScrollReveal';

export default function GiftMessage() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: { xs: 10, md: 14 },
        px: 3,
        backgroundColor: COLORS.bgCream,
      }}
    >
      <ScrollReveal>
        <OrnamentalDivider />
        <Typography
          sx={{
            fontFamily: FONTS.serif,
            fontSize: { xs: '1.3rem', sm: '1.6rem' },
            color: COLORS.textPrimary,
            lineHeight: 1.8,
            maxWidth: 520,
            mx: 'auto',
            mt: 4,
            mb: 2,
            fontWeight: 300,
            fontStyle: 'italic',
          }}
        >
          Sự hiện diện và lời chúc của bạn là món quà quý giá nhất đối với chúng
          mình!
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '0.85rem', sm: '0.9rem' },
            color: COLORS.textSecondary,
            lineHeight: 1.6,
            maxWidth: 440,
            mx: 'auto',
            fontFamily: FONTS.body,
            mb: 3,
          }}
        >
          Nếu bạn muốn gửi gắm thêm tình cảm, có thể tìm thấy thông tin bên dưới
          đây.
        </Typography>
        <OrnamentalDivider />
      </ScrollReveal>
    </Box>
  );
}
