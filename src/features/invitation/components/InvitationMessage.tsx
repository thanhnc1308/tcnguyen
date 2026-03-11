'use client';

import { Box, Typography } from '@mui/material';
import { COLORS, FONTS } from '../constants/design';
import { BRIDE_NAME, GROOM_NAME } from '@/constants/wedding';
import ScrollReveal from './ScrollReveal';

export default function InvitationMessage() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: { xs: 8, md: 10 },
        px: 3,
        backgroundColor: COLORS.bgCream,
      }}
    >
      <ScrollReveal>
        {/* Large couple names in script */}
        <Typography
          sx={{
            fontFamily: FONTS.script,
            fontSize: { xs: '3rem', sm: '4rem', md: '4.5rem' },
            color: COLORS.primary,
            fontWeight: 700,
            lineHeight: 1.2,
            mb: 4,
          }}
        >
          {GROOM_NAME}
          <br />
          <Box
            component='span'
            sx={{
              fontSize: '0.6em',
              fontWeight: 400,
              color: COLORS.accent,
            }}
          >
            &amp;
          </Box>
          <br />
          {BRIDE_NAME}
        </Typography>

      </ScrollReveal>
    </Box>
  );
}
