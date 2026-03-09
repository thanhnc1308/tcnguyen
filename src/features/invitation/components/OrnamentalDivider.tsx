'use client';

import { Box } from '@mui/material';
import { COLORS } from '../constants/design';

interface OrnamentalDividerProps {
  color?: string;
  width?: string | number;
}

export default function OrnamentalDivider({
  color = COLORS.accent,
  width = 120,
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
          backgroundColor: color,
          opacity: 0.25,
        }}
      />
      {/* Small leaf/sprig */}
      <svg width='12' height='16' viewBox='0 0 12 16' fill='none'>
        <path
          d='M6 15V4'
          stroke={color}
          strokeWidth='0.8'
          opacity='0.5'
        />
        <ellipse cx='3.5' cy='5' rx='2.5' ry='4' transform='rotate(-15 3.5 5)' fill='none' stroke={color} strokeWidth='0.7' opacity='0.5' />
        <ellipse cx='8.5' cy='4' rx='2.5' ry='4' transform='rotate(15 8.5 4)' fill='none' stroke={color} strokeWidth='0.7' opacity='0.5' />
      </svg>
      <Box
        sx={{
          flex: 1,
          height: '1px',
          backgroundColor: color,
          opacity: 0.25,
        }}
      />
    </Box>
  );
}
