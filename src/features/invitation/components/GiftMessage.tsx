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
        backgroundColor: COLORS.bgBlack,
      }}
    >
      <ScrollReveal>
        <OrnamentalDivider />
        <Typography
          sx={{
            fontFamily: FONTS.serif,
            fontSize: { xs: '1.4rem', sm: '1.8rem', md: '2.2rem' },
            color: COLORS.textPrimary,
            lineHeight: 1.8,
            maxWidth: 650,
            mx: 'auto',
            mt: 4,
            mb: 3,
            fontWeight: 300,
            fontStyle: 'italic',
          }}
        >
          Sự hiện diện và lời chúc của bạn là món quà quý giá nhất đối với chúng
          mình!
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '0.9rem', sm: '1rem' },
            color: COLORS.textSecondary,
            lineHeight: 1.8,
            maxWidth: 500,
            mx: 'auto',
            fontFamily: FONTS.body,
            fontWeight: 300,
          }}
        >
          Nếu bạn muốn gửi gắm thêm tình cảm, có thể tìm thấy thông tin bên dưới
          đây. Chúng mình vô cùng trân trọng.
        </Typography>
        <OrnamentalDivider />
      </ScrollReveal>
    </Box>
  );
}
