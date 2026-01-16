'use client';

import { Box, Typography } from '@mui/material';

export default function InvitationMessage() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 6,
        px: 3,
        backgroundColor: '#fef9e7',
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: { xs: '1.5rem', sm: '1.8rem' },
          color: '#5a5a5a',
          lineHeight: 1.6,
          maxWidth: 600,
          mx: 'auto',
        }}
      >
        Trân trọng kính mời bạn đến tham dự lễ cưới và bữa tiệc thân mật cùng
        chúng mình!
      </Typography>
    </Box>
  );
}
