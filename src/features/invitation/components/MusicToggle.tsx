'use client';

import { IconButton } from '@mui/material';
import { VolumeUp, VolumeOff, MusicNote } from '@mui/icons-material';
import { COLORS } from '../constants/design';

export default function MusicToggle({
  isPlaying,
  isMuted,
  onPlay,
  onToggle,
}: {
  isPlaying: boolean;
  isMuted: boolean;
  onPlay: () => void;
  onToggle: () => void;
}) {
  const icon = !isPlaying ? (
    <MusicNote fontSize="small" />
  ) : isMuted ? (
    <VolumeOff fontSize="small" />
  ) : (
    <VolumeUp fontSize="small" />
  );

  const label = !isPlaying ? 'Phát nhạc' : isMuted ? 'Bật nhạc' : 'Tắt nhạc';
  const handleClick = !isPlaying ? onPlay : onToggle;

  return (
    <IconButton
      onClick={handleClick}
      aria-label={label}
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1000,
        bgcolor: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(8px)',
        color: COLORS.primary,
        width: 44,
        height: 44,
        boxShadow: '0 2px 12px rgba(58, 74, 58, 0.15)',
        border: `1px solid ${COLORS.accent}33`,
        transition: 'all 0.3s ease',
        animation: 'fadeInUp 0.5s ease forwards',
        '@keyframes fadeInUp': {
          from: { opacity: 0, transform: 'translateY(12px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        '&:hover': {
          bgcolor: 'rgba(255, 255, 255, 0.95)',
          transform: 'scale(1.08)',
        },
      }}
    >
      {icon}
    </IconButton>
  );
}
