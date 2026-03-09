// Đông Hồ — Vietnamese Woodblock Art
// Palette: Vermillion red + indigo + ochre yellow + rice paper cream
export const COLORS = {
  // Primary - vermillion red
  primary: '#C0392B',
  primaryLight: '#D4534A',
  primaryDark: '#96281E',

  // Accent - ochre yellow
  accent: '#D4A017',
  accentLight: '#E8BD4A',
  accentDark: '#B08512',

  // Indigo - secondary
  indigo: '#2C3E6B',
  indigoLight: '#3D5494',
  indigoDark: '#1E2B4A',

  // Text
  textPrimary: '#2A1F1A',
  textSecondary: '#6B5D52',
  textOnPrimary: '#F5F0E1',

  // Backgrounds
  bgCream: '#F5F0E1',
  bgWarm: '#EDE5D3',
  bgWhite: '#FAF7F0',
  bgRicePaper: '#F2ECD8',

  // Envelope
  envelopeGradientStart: '#C0392B',
  envelopeGradientMid: '#D4534A',
  envelopeGradientEnd: '#96281E',

  // Decorative
  gold: '#D4A017',
  goldLight: '#E8BD4A',
  heartRed: '#C0392B',
  woodblock: '#8B4513',

  // Borders & overlays
  borderGold: 'rgba(212, 160, 23, 0.2)',
  borderGoldHover: 'rgba(212, 160, 23, 0.4)',
  borderWoodblock: 'rgba(44, 62, 107, 0.15)',
  overlayLight: 'rgba(245, 240, 225, 0.92)',
  overlayDark: 'rgba(42, 31, 26, 0.06)',
} as const;

export const FONTS = {
  script: "'Dancing Script', cursive",
  serif: "'EB Garamond', serif",
  body: "'EB Garamond', serif",
  handwritten: "'Kalam', cursive",
  display: "'EB Garamond', serif",
} as const;

// Shared animation durations
export const TRANSITIONS = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  reveal: '800ms',
} as const;

// Shared section styles
export const sectionStyle = (bg: string = COLORS.bgCream) =>
  ({
    py: { xs: 8, md: 12 },
    px: 3,
    backgroundColor: bg,
    position: 'relative' as const,
  }) as const;

// Shared card styles — woodblock-inspired with subtle border
export const cardStyle = {
  backgroundColor: COLORS.bgWhite,
  borderRadius: 1,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
  border: `2px solid ${COLORS.borderWoodblock}`,
  transition: `all ${TRANSITIONS.normal} ease`,
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 36px rgba(0, 0, 0, 0.1)',
    borderColor: 'rgba(44, 62, 107, 0.3)',
  },
} as const;

// Shared button styles
export const primaryButtonStyle = {
  backgroundColor: COLORS.primary,
  color: COLORS.textOnPrimary,
  borderRadius: 1,
  py: 1.5,
  fontWeight: 600,
  textTransform: 'none' as const,
  fontSize: '0.95rem',
  fontFamily: FONTS.serif,
  boxShadow: '0 4px 12px rgba(192, 57, 43, 0.25)',
  '&:hover': {
    backgroundColor: COLORS.primaryDark,
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(192, 57, 43, 0.35)',
  },
  transition: `all ${TRANSITIONS.normal} ease`,
} as const;

// Section heading style — traditional Vietnamese feel
export const sectionHeadingStyle = {
  fontFamily: FONTS.serif,
  color: COLORS.indigo,
  fontWeight: 700,
  mb: 2,
  fontSize: { xs: '2.5rem', md: '3.5rem' },
  fontStyle: 'italic',
} as const;
