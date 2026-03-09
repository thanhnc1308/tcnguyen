'use client';
import { useState, useEffect } from 'react';
import { COLORS, FONTS } from '../constants/design';

const formatNumber = (num: number) => {
  return num.toString().padStart(2, '0');
};

export default function CountdownTimer({
  weddingDate,
}: {
  weddingDate: string;
}) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(weddingDate);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const items = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className='mb-12'>
      <div className='flex items-center justify-center gap-6 md:gap-8'>
        {items.map((item, index) => (
          <div key={item.label} className='flex items-center gap-6 md:gap-8'>
            <div className='text-center'>
              <p
                className='text-4xl md:text-5xl font-light mb-1'
                style={{
                  fontFamily: FONTS.serif,
                  color: COLORS.textPrimary,
                  letterSpacing: '-0.02em',
                }}
              >
                {formatNumber(item.value)}
              </p>
              <p
                className='text-[10px] tracking-[0.3em] uppercase'
                style={{
                  fontFamily: FONTS.body,
                  color: COLORS.accent,
                  fontWeight: 500,
                }}
              >
                {item.label}
              </p>
            </div>
            {index < items.length - 1 && (
              <span
                className='text-xl font-light self-start mt-2'
                style={{ color: COLORS.accent, opacity: 0.4 }}
              >
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
