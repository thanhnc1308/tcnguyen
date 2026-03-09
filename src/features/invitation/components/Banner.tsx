import CountdownTimer from './CountdownTimer';
import { formatDisplayDate } from '@/utils/date';
import SaveTheDateButton from './SaveTheDateButton';
import { BRIDE_NAME, GROOM_NAME, WEDDING_DATE } from '@/constants/wedding';
import { COLORS, FONTS } from '../constants/design';

interface WeddingBannerProps {
  quote?: string;
  backgroundImage?: string;
  showCountdown?: boolean;
}

export default function WeddingBanner({
  quote = '',
  backgroundImage = '/images/wedding-bg.JPG',
}: WeddingBannerProps) {
  return (
    <div className='relative min-h-screen overflow-hidden' style={{ backgroundColor: COLORS.bgBlack }}>
      {/* Background Photo with Ken Burns effect */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          filter: 'brightness(0.35) contrast(1.1)',
        }}
      />

      {/* Gold gradient overlay from bottom */}
      <div
        className='absolute inset-0'
        style={{
          background: `linear-gradient(to top, ${COLORS.bgBlack} 0%, transparent 40%, transparent 60%, ${COLORS.bgBlack}CC 100%)`,
        }}
      />

      {/* Main Content */}
      <div className='relative z-10 flex flex-col items-center justify-center min-h-screen px-4'>
        {/* Thin gold line */}
        <div
          className='w-px h-16 mb-8'
          style={{ backgroundColor: COLORS.accent, opacity: 0.4 }}
        />

        {/* Subtitle */}
        <p
          className='text-xs tracking-[0.4em] uppercase mb-6'
          style={{
            fontFamily: FONTS.body,
            color: COLORS.accent,
            fontWeight: 500,
          }}
        >
          The Wedding of
        </p>

        {/* Names — oversized Great Vibes */}
        <div className='text-center mb-4'>
          <h1
            className='text-6xl md:text-8xl lg:text-9xl'
            style={{
              fontFamily: FONTS.script,
              color: COLORS.textPrimary,
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            {GROOM_NAME}
            <span
              className='block md:inline'
              style={{
                color: COLORS.accent,
                margin: '0 0.2em',
                fontSize: '0.5em',
                fontFamily: FONTS.serif,
                fontStyle: 'italic',
                fontWeight: 300,
              }}
            >
              &amp;
            </span>
            {BRIDE_NAME}
          </h1>
        </div>

        {/* Thin gold line */}
        <div className='flex items-center gap-4 mb-6'>
          <div
            className='h-px w-12'
            style={{ backgroundColor: COLORS.accent, opacity: 0.4 }}
          />
          <div
            className='w-1.5 h-1.5 rotate-45'
            style={{ backgroundColor: COLORS.accent, opacity: 0.6 }}
          />
          <div
            className='h-px w-12'
            style={{ backgroundColor: COLORS.accent, opacity: 0.4 }}
          />
        </div>

        {/* Date */}
        <div className='text-center mb-8'>
          <p
            style={{
              fontFamily: FONTS.body,
              color: COLORS.textPrimary,
              fontWeight: 300,
              letterSpacing: '0.3em',
              fontSize: '0.95rem',
              textTransform: 'uppercase',
            }}
          >
            {formatDisplayDate(WEDDING_DATE)}
          </p>
        </div>

        {/* Quote */}
        {quote && (
          <div className='text-center mb-12 max-w-lg'>
            <p
              style={{
                fontFamily: FONTS.serif,
                color: COLORS.textSecondary,
                fontStyle: 'italic',
                fontSize: '1.1rem',
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              &quot;{quote}&quot;
            </p>
          </div>
        )}

        {/* Countdown Timer */}
        <CountdownTimer weddingDate={WEDDING_DATE} />

        {/* Save the Date Button */}
        <SaveTheDateButton />
      </div>
    </div>
  );
}
