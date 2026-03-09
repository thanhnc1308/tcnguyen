import CountdownTimer from './CountdownTimer';
import { formatDisplayDate } from '@/utils/date';
import SaveTheDateButton from './SaveTheDateButton';
import { BRIDE_NAME, GROOM_NAME, WEDDING_DATE } from '@/constants/wedding';
import { COLORS, FONTS } from '../constants/design';

export default function WeddingBanner() {
  return (
    <div className='relative min-h-screen flex flex-col items-center justify-center px-4'
      style={{ backgroundColor: COLORS.bgWhite }}
    >
      {/* Thin top line accent */}
      <div
        className='absolute top-0 left-1/2 -translate-x-1/2 w-px h-24'
        style={{ backgroundColor: COLORS.accent, opacity: 0.3 }}
      />

      {/* Small eucalyptus sprig SVG */}
      <svg
        width='40'
        height='60'
        viewBox='0 0 40 60'
        fill='none'
        className='mb-8 opacity-40'
      >
        <path
          d='M20 58V20'
          stroke={COLORS.accent}
          strokeWidth='1'
        />
        <ellipse cx='12' cy='22' rx='6' ry='10' transform='rotate(-20 12 22)' fill='none' stroke={COLORS.accent} strokeWidth='0.8' />
        <ellipse cx='28' cy='18' rx='6' ry='10' transform='rotate(20 28 18)' fill='none' stroke={COLORS.accent} strokeWidth='0.8' />
        <ellipse cx='10' cy='36' rx='5' ry='8' transform='rotate(-25 10 36)' fill='none' stroke={COLORS.accent} strokeWidth='0.8' />
        <ellipse cx='30' cy='32' rx='5' ry='8' transform='rotate(25 30 32)' fill='none' stroke={COLORS.accent} strokeWidth='0.8' />
        <ellipse cx='14' cy='48' rx='4' ry='6' transform='rotate(-15 14 48)' fill='none' stroke={COLORS.accent} strokeWidth='0.8' />
        <ellipse cx='26' cy='46' rx='4' ry='6' transform='rotate(15 26 46)' fill='none' stroke={COLORS.accent} strokeWidth='0.8' />
      </svg>

      {/* Subtitle */}
      <p
        className='text-xs tracking-[0.4em] uppercase mb-8'
        style={{
          fontFamily: FONTS.body,
          color: COLORS.textSecondary,
          fontWeight: 400,
        }}
      >
        Chúng mình sắp cưới
      </p>

      {/* Names — large serif */}
      <h1
        className='text-center mb-2'
        style={{
          fontFamily: FONTS.serif,
          color: COLORS.textPrimary,
          fontWeight: 300,
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          lineHeight: 1.1,
          letterSpacing: '0.02em',
        }}
      >
        {GROOM_NAME}
      </h1>

      {/* Ampersand — script font accent */}
      <p
        className='my-4'
        style={{
          fontFamily: FONTS.script,
          color: COLORS.accent,
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: 400,
        }}
      >
        và
      </p>

      <h1
        className='text-center mb-8'
        style={{
          fontFamily: FONTS.serif,
          color: COLORS.textPrimary,
          fontWeight: 300,
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          lineHeight: 1.1,
          letterSpacing: '0.02em',
        }}
      >
        {BRIDE_NAME}
      </h1>

      {/* Thin horizontal rule */}
      <div
        className='w-12 h-px mb-8'
        style={{ backgroundColor: COLORS.textSecondary, opacity: 0.3 }}
      />

      {/* Date */}
      <p
        className='text-center mb-10'
        style={{
          fontFamily: FONTS.body,
          color: COLORS.textSecondary,
          fontWeight: 400,
          letterSpacing: '0.2em',
          fontSize: '0.95rem',
        }}
      >
        {formatDisplayDate(WEDDING_DATE)}
      </p>

      {/* Countdown Timer */}
      <CountdownTimer weddingDate={WEDDING_DATE} />

      {/* Save the Date Button */}
      <SaveTheDateButton />
    </div>
  );
}
