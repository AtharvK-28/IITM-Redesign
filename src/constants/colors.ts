export const COLORS = {
  primary: '#800020',
  secondary: '#FFD700',
  accent: '#B8860B',
  neutral: {
    light: '#FFF8E7',
    dark: '#2D2020'
  }
} as const;

export type ColorKey = keyof typeof COLORS;