export type ColorPalette = 'calm-professional' | 'modern-wellness' | 'warm-earth';
export type DesignStyle = 'clean-card' | 'soft-neumorphic' | 'minimalist-clinical';

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  textPrimary: string;
  textSecondary: string;
  success: string;
  warning: string;
  error: string;
}

export interface ThemeDesign {
  borderRadius: string;
  shadow: string;
  fontFamily: string;
  fontWeight: {
    normal: number;
    medium: number;
    bold: number;
  };
}

export interface Theme {
  id: string;
  name: string;
  colors: ThemeColors;
  design: ThemeDesign;
}