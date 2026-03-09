'use client';

import { Box } from '@mui/material';
import { COLORS } from '../constants/design';

interface OrnamentalDividerProps {
  color?: string;
  width?: string | number;
}

export default function OrnamentalDivider({
  color = COLORS.accent,
  width = 200,
}: OrnamentalDividerProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        width,
        mx: 'auto',
        my: 2,
      }}
    >
      <Box
        sx={{
          flex: 1,
          height: '1px',
          background: `linear-gradient(to right, transparent, ${color})`,
          opacity: 0.4,
        }}
      />
      <Box
        sx={{
          width: 6,
          height: 6,
          transform: 'rotate(45deg)',
          backgroundColor: color,
          opacity: 0.6,
        }}
      />
      <Box
        sx={{
          flex: 1,
          height: '1px',
          background: `linear-gradient(to left, transparent, ${color})`,
          opacity: 0.4,
        }}
      />
    </Box>
  );
}
