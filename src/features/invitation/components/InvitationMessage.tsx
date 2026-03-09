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
          Trân trọng kính mời bạn đến tham dự lễ cưới và bữa tiệc thân mật cùng
          chúng mình!
        </Typography>
        <OrnamentalDivider />
      </ScrollReveal>
    </Box>
  );
}
