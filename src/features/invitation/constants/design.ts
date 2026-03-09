// Minimalist wedding invitation design tokens
// Palette: Pure white, charcoal, sage green, dusty rose — elegant & timeless

export const COLORS = {
  // Primary - charcoal
  primary: '#2D2D2D',
  primaryLight: '#5A5A5A',
  primaryDark: '#1A1A1A',

  // Accent - sage green
  accent: '#87A878',
  accentLight: '#A8C49A',
  accentDark: '#6B8C5E',

  // Secondary accent - dusty rose
  rose: '#C9A9A6',
  roseLight: '#DCC4C2',
  roseDark: '#B08E8B',

  // Text
  textPrimary: '#2D2D2D',
  textSecondary: '#7A7A7A',
  textOnPrimary: '#FFFFFF',

  // Backgrounds
  bgCream: '#FAFAF8',
  bgWarm: '#F5F4F0',
  bgWhite: '#FFFFFF',

  // Envelope - muted sage
  envelopeGradientStart: '#87A878',
  envelopeGradientMid: '#A8C49A',
  envelopeGradientEnd: '#6B8C5E',

  // Decorative
  gold: '#87A878',
  goldLight: '#A8C49A',
  heartRed: '#C9A9A6',

  // Borders & overlays
  borderGold: 'rgba(135, 168, 120, 0.15)',
  borderGoldHover: 'rgba(135, 168, 120, 0.3)',
  overlayLight: 'rgba(250, 250, 248, 0.92)',
  overlayDark: 'rgba(45, 45, 45, 0.04)',
} as const;

export const FONTS = {
  script: "'Pinyon Script', cursive",
  serif: "'Cormorant Garamond', serif",
  body: "'DM Sans', sans-serif",
  handwritten: "'Cormorant Garamond', serif",
  display: "'Pinyon Script', cursive",
} as const;

// Shared animation durations
export const TRANSITIONS = {
  fast: '150ms',
  normal: '250ms',
  slow: '500ms',
  reveal: '800ms',
} as const;

// Shared section styles — generous whitespace, single-column feel
export const sectionStyle = (bg: string = COLORS.bgWhite) =>
  ({
    py: { xs: 10, md: 14 },
    px: 3,
    backgroundColor: bg,
    position: 'relative' as const,
  }) as const;

// Shared card styles — minimal, no hover effects
export const cardStyle = {
  backgroundColor: COLORS.bgWhite,
  borderRadius: 2,
  boxShadow: 'none',
  border: `1px solid ${COLORS.borderGold}`,
  transition: `all ${TRANSITIONS.normal} ease`,
  '&:hover': {
    borderColor: COLORS.borderGoldHover,
  },
} as const;

// Shared button styles — minimal outline
export const primaryButtonStyle = {
  backgroundColor: COLORS.primary,
  color: COLORS.textOnPrimary,
  borderRadius: 0,
  py: 1.5,
  fontWeight: 500,
  textTransform: 'none' as const,
  fontSize: '0.9rem',
  fontFamily: FONTS.body,
  letterSpacing: '0.05em',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: COLORS.primaryDark,
    boxShadow: 'none',
  },
  transition: `all ${TRANSITIONS.normal} ease`,
} as const;

// Section heading style — large serif, understated
export const sectionHeadingStyle = {
  fontFamily: FONTS.serif,
  color: COLORS.textPrimary,
  fontWeight: 300,
  mb: 2,
  fontSize: { xs: '2rem', md: '2.5rem' },
  letterSpacing: '0.02em',
  textTransform: 'uppercase' as const,
} as const;
