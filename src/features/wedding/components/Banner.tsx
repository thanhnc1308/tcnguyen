import { Dancing_Script } from 'next/font/google';
import CountdownTimer from './CountdownTimer';
import { formatDisplayDate } from '@/utils/date';
import SaveTheDateButton from './SaveTheDateButton';

const dancingScript = Dancing_Script({
  variable: '--font-dancing-script',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
});

interface WeddingBannerProps {
  brideName?: string;
  groomName?: string;
  weddingDate?: string;
  quote?: string;
  backgroundImage?: string;
  showCountdown?: boolean;
}

export default function WeddingBanner({
  groomName = 'Thành',
  brideName = 'Mến',
  weddingDate = '2026-03-03',
  quote = 'Hehe.',
  backgroundImage = 'images/wedding-bg.JPG',
}: WeddingBannerProps) {
  return (
    <div className='relative min-h-screen overflow-hidden'>
      {/* Background Image */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        <div className='absolute inset-0 bg-white/40' />
      </div>

      {/* Main Content */}
      <div className='relative z-10 flex flex-col items-center justify-center min-h-screen px-4'>
        {/* Names */}
        <div className='text-center mb-8'>
          <h1
            style={{ fontFamily: dancingScript.style.fontFamily }}
            className={`text-6xl md:text-7xl lg:text-8xl font-script text-gray-700 mb-4`}
          >
            {groomName} & {brideName}
          </h1>

          {/* Heart Fingerprint */}
          <div className='flex justify-center mb-6'>
            <div className='w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center'>
              <svg viewBox='0 0 24 24' className='w-10 h-10 fill-white'>
                <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
              </svg>
            </div>
          </div>
        </div>

        {/* Date */}
        <div className='text-center mb-6'>
          <p className='text-xl text-gray-600 font-light tracking-wider'>
            {formatDisplayDate(weddingDate)}
          </p>
        </div>

        {/* Quote */}
        {quote && (
          <div className='text-center mb-12 max-w-md'>
            <p className='text-gray-600 italic mb-2'>&quot;{quote}&quot;</p>
          </div>
        )}

        {/* Countdown Timer */}
        <CountdownTimer weddingDate={weddingDate} />

        {/* Save the Date Button */}
        <SaveTheDateButton />
      </div>
    </div>
  );
}
