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

/* Lotus SVG decorative element */
function LotusSVG({ color = COLORS.primary, size = 40, opacity = 0.15 }: { color?: string; size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox='0 0 100 100' fill='none' opacity={opacity}>
      <path d='M50 10 C50 10, 30 35, 50 60 C70 35, 50 10, 50 10Z' fill={color} />
      <path d='M50 10 C50 10, 70 35, 50 60 C30 35, 50 10, 50 10Z' fill={color} opacity='0.6' />
      <path d='M25 30 C25 30, 35 50, 50 60 C35 50, 25 30, 25 30Z' fill={color} opacity='0.4' />
      <path d='M75 30 C75 30, 65 50, 50 60 C65 50, 75 30, 75 30Z' fill={color} opacity='0.4' />
      <path d='M15 45 C15 45, 30 55, 50 60 C30 55, 15 45, 15 45Z' fill={color} opacity='0.25' />
      <path d='M85 45 C85 45, 70 55, 50 60 C70 55, 85 45, 85 45Z' fill={color} opacity='0.25' />
      <ellipse cx='50' cy='65' rx='12' ry='4' fill={color} opacity='0.3' />
    </svg>
  );
}

/* Red seal stamp (triện) */
function SealStamp({ text }: { text: string }) {
  return (
    <div
      className='inline-block relative'
      style={{
        animation: 'stampPress 0.8s ease-out forwards',
      }}
    >
      <svg width='80' height='80' viewBox='0 0 80 80' fill='none'>
        <rect x='4' y='4' width='72' height='72' rx='4' stroke={COLORS.primary} strokeWidth='3' fill='none' />
        <rect x='8' y='8' width='64' height='64' rx='2' stroke={COLORS.primary} strokeWidth='1' fill='rgba(192, 57, 43, 0.08)' />
      </svg>
      <span
        className='absolute inset-0 flex items-center justify-center text-center leading-tight'
        style={{
          fontFamily: FONTS.serif,
          color: COLORS.primary,
          fontWeight: 800,
          fontSize: '0.85rem',
          padding: '12px',
        }}
      >
        {text}
      </span>
    </div>
  );
}

export default function WeddingBanner({
  quote = '',
  backgroundImage = '/images/wedding-bg.JPG',
}: WeddingBannerProps) {
  return (
    <div className='relative min-h-screen overflow-hidden' style={{ backgroundColor: COLORS.bgCream }}>
      {/* Rice paper texture background */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        <div
          className='absolute inset-0'
          style={{
            background: `linear-gradient(to bottom, ${COLORS.bgCream}88 0%, ${COLORS.bgCream}CC 40%, ${COLORS.bgCream}EE 100%)`,
          }}
        />
      </div>

      {/* Decorative lotus corners */}
      <div className='absolute top-8 left-8 opacity-20'>
        <LotusSVG color={COLORS.indigo} size={60} opacity={0.2} />
      </div>
      <div className='absolute top-8 right-8 opacity-20' style={{ transform: 'scaleX(-1)' }}>
        <LotusSVG color={COLORS.indigo} size={60} opacity={0.2} />
      </div>
      <div className='absolute bottom-8 left-8 opacity-15' style={{ transform: 'rotate(180deg)' }}>
        <LotusSVG color={COLORS.primary} size={50} opacity={0.15} />
      </div>
      <div className='absolute bottom-8 right-8 opacity-15' style={{ transform: 'rotate(180deg) scaleX(-1)' }}>
        <LotusSVG color={COLORS.primary} size={50} opacity={0.15} />
      </div>

      {/* Woodblock-style top border */}
      <div
        className='absolute top-0 left-0 right-0 h-2'
        style={{
          background: `repeating-linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primary} 8px, transparent 8px, transparent 12px)`,
          opacity: 0.3,
        }}
      />

      {/* Main Content */}
      <div className='relative z-10 flex flex-col items-center justify-center min-h-screen px-4'>
        {/* Subtitle */}
        <p
          className='text-sm tracking-[0.25em] uppercase mb-4'
          style={{
            fontFamily: FONTS.serif,
            color: COLORS.indigo,
            fontWeight: 600,
          }}
        >
          Thiệp mời đám cưới
        </p>

        {/* Woodblock frame around names */}
        <div
          className='text-center mb-6 px-8 py-4 relative'
          style={{
            border: `2px solid ${COLORS.indigo}30`,
            borderRadius: '4px',
          }}
        >
          {/* Corner decorations */}
          <div className='absolute -top-1.5 -left-1.5 w-3 h-3' style={{ backgroundColor: COLORS.primary }} />
          <div className='absolute -top-1.5 -right-1.5 w-3 h-3' style={{ backgroundColor: COLORS.primary }} />
          <div className='absolute -bottom-1.5 -left-1.5 w-3 h-3' style={{ backgroundColor: COLORS.primary }} />
          <div className='absolute -bottom-1.5 -right-1.5 w-3 h-3' style={{ backgroundColor: COLORS.primary }} />

          <h1
            className='text-5xl md:text-7xl lg:text-8xl'
            style={{
              fontFamily: FONTS.script,
              color: COLORS.indigo,
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {GROOM_NAME}
            <span
              style={{
                color: COLORS.primary,
                margin: '0 0.2em',
                fontSize: '0.5em',
                fontFamily: FONTS.serif,
                fontWeight: 400,
              }}
            >
              &amp;
            </span>
            {BRIDE_NAME}
          </h1>
        </div>

        {/* Ornamental line with lotus */}
        <div className='flex items-center justify-center gap-3 mb-4'>
          <div
            className='h-px w-16'
            style={{
              background: `linear-gradient(to right, transparent, ${COLORS.indigo})`,
              opacity: 0.3,
            }}
          />
          <LotusSVG color={COLORS.primary} size={24} opacity={0.5} />
          <div
            className='h-px w-16'
            style={{
              background: `linear-gradient(to left, transparent, ${COLORS.indigo})`,
              opacity: 0.3,
            }}
          />
        </div>

        {/* Red seal stamp with date */}
        <div className='mb-6'>
          <SealStamp text={formatDisplayDate(WEDDING_DATE)} />
        </div>

        {/* Quote */}
        {quote && (
          <div className='text-center mb-10 max-w-md'>
            <p
              style={{
                fontFamily: FONTS.serif,
                color: COLORS.textSecondary,
                fontStyle: 'italic',
                fontSize: '1.1rem',
                lineHeight: 1.8,
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

      {/* Woodblock-style bottom border */}
      <div
        className='absolute bottom-0 left-0 right-0 h-2'
        style={{
          background: `repeating-linear-gradient(90deg, ${COLORS.primary}, ${COLORS.primary} 8px, transparent 8px, transparent 12px)`,
          opacity: 0.3,
        }}
      />
    </div>
  );
}
