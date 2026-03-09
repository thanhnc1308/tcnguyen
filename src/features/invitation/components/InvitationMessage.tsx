'use client';

import { Box, Typography } from '@mui/material';
import { COLORS, FONTS } from '../constants/design';
import OrnamentalDivider from './OrnamentalDivider';
import ScrollReveal from './ScrollReveal';

export default function InvitationMessage() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: { xs: 10, md: 14 },
        px: 3,
        backgroundColor: COLORS.bgWhite,
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
            mb: 4,
            fontWeight: 300,
            fontStyle: 'italic',
          }}
        >
          Trân trọng kính mời bạn đến tham dự lễ cưới và bữa tiệc thân mật cùng
          chúng mình!
        </Typography>
        <OrnamentalDivider />
      </ScrollReveal>
    </Box>
  );
}
