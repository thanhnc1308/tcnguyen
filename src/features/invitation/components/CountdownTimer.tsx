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
    { label: 'Ngày', value: timeLeft.days },
    { label: 'Giờ', value: timeLeft.hours },
    { label: 'Phút', value: timeLeft.minutes },
    { label: 'Giây', value: timeLeft.seconds },
  ];

  return (
    <div className='mb-10'>
      <div className='flex items-center justify-center gap-6 sm:gap-8'>
        {items.map((item, index) => (
          <div key={item.label} className='flex items-center gap-6 sm:gap-8'>
            <div className='text-center'>
              <p
                className='text-3xl sm:text-4xl font-light mb-1'
                style={{
                  fontFamily: FONTS.serif,
                  color: COLORS.textPrimary,
                  letterSpacing: '0.05em',
                }}
              >
                {formatNumber(item.value)}
              </p>
              <p
                className='text-[10px] uppercase tracking-[0.2em]'
                style={{
                  fontFamily: FONTS.body,
                  color: COLORS.textSecondary,
                  fontWeight: 400,
                }}
              >
                {item.label}
              </p>
            </div>
            {index < items.length - 1 && (
              <span
                className='text-lg -mt-4'
                style={{ color: COLORS.textSecondary, opacity: 0.3 }}
              >
                ·
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
