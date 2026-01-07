'use client';
import { useState, useEffect } from 'react';

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

  return (
    <div className='mb-12'>
      <div className='flex items-center justify-center space-x-2 mb-4'>
        <div className='text-center'>
          <p className='text-xs text-gray-500 mb-2 tracking-wider'>Ngày</p>
          <div className='bg-gray-800 text-white text-3xl font-bold px-4 py-3 rounded-lg min-w-[60px]'>
            {formatNumber(timeLeft.days)}
          </div>
        </div>

        <span className='text-2xl text-gray-600 font-bold'>:</span>

        <div className='text-center'>
          <p className='text-xs text-gray-500 mb-2 tracking-wider'>Giờ</p>
          <div className='bg-gray-800 text-white text-3xl font-bold px-4 py-3 rounded-lg min-w-[60px]'>
            {formatNumber(timeLeft.hours)}
          </div>
        </div>

        <span className='text-2xl text-gray-600 font-bold'>:</span>

        <div className='text-center'>
          <p className='text-xs text-gray-500 mb-2 tracking-wider'>Phút</p>
          <div className='bg-gray-800 text-white text-3xl font-bold px-4 py-3 rounded-lg min-w-[60px]'>
            {formatNumber(timeLeft.minutes)}
          </div>
        </div>

        <span className='text-2xl text-gray-600 font-bold'>:</span>

        <div className='text-center'>
          <p className='text-xs text-gray-500 mb-2 tracking-wider'>Giây</p>
          <div className='bg-gray-800 text-white text-3xl font-bold px-4 py-3 rounded-lg min-w-[60px]'>
            {formatNumber(timeLeft.seconds)}
          </div>
        </div>
      </div>
    </div>
  );
}
