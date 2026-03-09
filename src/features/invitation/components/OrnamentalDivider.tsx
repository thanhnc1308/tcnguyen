'use client';

import { Box } from '@mui/material';
import { COLORS } from '../constants/design';

interface OrnamentalDividerProps {
  color?: string;
  width?: string | number;
}

export default function OrnamentalDivider({
  color = COLORS.indigo,
  width = 200,
}: OrnamentalDividerProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1.5,
        width,
        mx: 'auto',
        my: 2,
      }}
    >
      <Box
        sx={{
          flex: 1,
          height: '1.5px',
          background: `linear-gradient(to right, transparent, ${color})`,
          opacity: 0.3,
        }}
      />
      {/* Lotus mini icon */}
      <svg width='20' height='20' viewBox='0 0 100 100' fill='none'>
        <path d='M50 15 C50 15, 32 38, 50 58 C68 38, 50 15, 50 15Z' fill={COLORS.primary} opacity='0.5' />
        <path d='M30 32 C30 32, 38 48, 50 58 C38 48, 30 32, 30 32Z' fill={COLORS.primary} opacity='0.3' />
        <path d='M70 32 C70 32, 62 48, 50 58 C62 48, 70 32, 70 32Z' fill={COLORS.primary} opacity='0.3' />
        <ellipse cx='50' cy='62' rx='10' ry='3' fill={COLORS.primary} opacity='0.2' />
      </svg>
      <Box
        sx={{
          flex: 1,
          height: '1.5px',
          background: `linear-gradient(to left, transparent, ${color})`,
          opacity: 0.3,
        }}
      />
    </Box>
  );
}
