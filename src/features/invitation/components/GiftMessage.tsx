'use client';

import { Box, Typography } from '@mui/material';

export default function GiftMessage() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 6,
        px: 3,
        backgroundColor: '#f5e6d3',
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
          mb: 2,
        }}
      >
        Sự hiện diện và lời chúc của bạn là món quà quý giá nhất đối với chúng
        mình!
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '1rem', sm: '1.1rem' },
          color: '#777',
          lineHeight: 1.6,
          maxWidth: 500,
          mx: 'auto',
        }}
      >
        Nếu bạn muốn gửi gắm thêm tình cảm, có thể tìm thấy thông tin bên dưới
        đây. Chúng mình vô cùng trân trọng.
      </Typography>
    </Box>
  );
}
