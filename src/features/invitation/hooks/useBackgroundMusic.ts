'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const FADE_DURATION = 2000;
const TARGET_VOLUME = 0.4;
const VOLUME_STEPS = 20;

export function useBackgroundMusic(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [src]);

  const fadeIn = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const stepTime = FADE_DURATION / VOLUME_STEPS;
    const stepValue = TARGET_VOLUME / VOLUME_STEPS;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      audio.volume = Math.min(stepValue * currentStep, TARGET_VOLUME);
      if (currentStep >= VOLUME_STEPS) clearInterval(interval);
    }, stepTime);
  }, []);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.play().then(() => {
      setIsPlaying(true);
      fadeIn();
    }).catch(() => {
      // Browser blocked autoplay — silently ignore
    });
  }, [fadeIn]);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = TARGET_VOLUME;
      audio.play();
      setIsMuted(false);
    } else {
      audio.volume = 0;
      audio.pause();
      setIsMuted(true);
    }
  }, [isMuted]);

  return { play, isPlaying, isMuted, toggleMute };
}
