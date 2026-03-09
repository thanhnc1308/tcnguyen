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
        py: { xs: 8, md: 10 },
        px: 3,
        backgroundColor: COLORS.bgWarm,
        position: 'relative',
        // Woodblock border top & bottom
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          right: 0,
          height: '3px',
          background: `repeating-linear-gradient(90deg, ${COLORS.indigo}, ${COLORS.indigo} 6px, transparent 6px, transparent 10px)`,
          opacity: 0.15,
        },
        '&::before': { top: 0 },
        '&::after': { bottom: 0 },
      }}
    >
      <ScrollReveal>
        <OrnamentalDivider />
        <Typography
          sx={{
            fontFamily: FONTS.serif,
            fontSize: { xs: '1.5rem', sm: '1.9rem' },
            color: COLORS.indigo,
            lineHeight: 1.7,
            maxWidth: 600,
            mx: 'auto',
            mt: 3,
            mb: 2,
            fontStyle: 'italic',
            fontWeight: 500,
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
