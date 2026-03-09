// Sài Gòn Nights — Modern Vietnamese Luxury
// Palette: Jet black + champagne gold + off-white + blush
export const COLORS = {
  // Primary - jet black
  primary: '#0A0A0A',
  primaryLight: '#1A1A1A',
  primaryDark: '#000000',

  // Accent - champagne gold
  accent: '#C6A961',
  accentLight: '#D4BD7E',
  accentDark: '#A88B42',

  // Secondary - blush
  blush: '#E8D5C4',
  blushLight: '#F2E6DA',
  blushDark: '#D4B9A3',

  // Text
  textPrimary: '#FAFAFA',
  textSecondary: 'rgba(250, 250, 250, 0.6)',
  textOnPrimary: '#0A0A0A',
  textOnLight: '#1A1A1A',

  // Backgrounds
  bgBlack: '#0A0A0A',
  bgDark: '#111111',
  bgCard: '#161616',
  bgOffWhite: '#FAFAFA',
  bgCream: '#F5F0E8',
  bgWarm: '#F5F0E8',
  bgWhite: '#FAFAFA',

  // Envelope
  envelopeGradientStart: '#0A0A0A',
  envelopeGradientMid: '#1A1A1A',
  envelopeGradientEnd: '#0A0A0A',

  // Decorative
  gold: '#C6A961',
  goldLight: '#D4BD7E',
  heartRed: '#C6A961',

  // Borders & overlays
  borderGold: 'rgba(198, 169, 97, 0.2)',
  borderGoldHover: 'rgba(198, 169, 97, 0.4)',
  overlayLight: 'rgba(10, 10, 10, 0.85)',
  overlayDark: 'rgba(10, 10, 10, 0.95)',
} as const;

export const FONTS = {
  script: "'Great Vibes', cursive",
  serif: "'Playfair Display', serif",
  body: "'Inter', sans-serif",
  handwritten: "'Great Vibes', cursive",
  display: "'Playfair Display', serif",
} as const;

// Shared animation durations
export const TRANSITIONS = {
  fast: '150ms',
  normal: '300ms',
  slow: '600ms',
  reveal: '800ms',
} as const;

// Shared section styles
export const sectionStyle = (bg: string = COLORS.bgBlack) =>
  ({
    py: { xs: 10, md: 16 },
    px: 3,
    backgroundColor: bg,
    position: 'relative' as const,
  }) as const;

// Shared card styles — sleek dark glass
export const cardStyle = {
  backgroundColor: COLORS.bgCard,
  borderRadius: 2,
  boxShadow: '0 2px 24px rgba(0, 0, 0, 0.4)',
  border: `1px solid ${COLORS.borderGold}`,
  transition: `all ${TRANSITIONS.normal} ease`,
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6)',
    borderColor: COLORS.borderGoldHover,
  },
} as const;

// Shared button styles
export const primaryButtonStyle = {
  backgroundColor: COLORS.accent,
  color: COLORS.textOnPrimary,
  borderRadius: 0,
  py: 1.5,
  fontWeight: 600,
  textTransform: 'uppercase' as const,
  fontSize: '0.8rem',
  fontFamily: FONTS.body,
  letterSpacing: '0.15em',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: COLORS.accentDark,
    boxShadow: '0 4px 20px rgba(198, 169, 97, 0.3)',
  },
  transition: `all ${TRANSITIONS.normal} ease`,
} as const;

// Section heading style — oversized editorial serif
export const sectionHeadingStyle = {
  fontFamily: FONTS.serif,
  color: COLORS.accent,
  fontWeight: 400,
  mb: 2,
  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
  letterSpacing: '-0.02em',
  lineHeight: 1.1,
} as const;
