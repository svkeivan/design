/**
 * Clarity Path Design System Tokens
 * 
 * This file contains all design tokens for the Healthcare + Soft Neumorphic design system.
 * Import these tokens in your components for consistent styling.
 */

export const designTokens = {
  colors: {
    primary: '#0D7377',
    secondary: '#7FB069',
    accent: '#E8AA42',
    background: '#FAFBFC',
    surface: '#F0F4F5',
    textPrimary: '#1A2B3C',
    textSecondary: '#5A6978',
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
  },
  typography: {
    fontFamily: "'Outfit', system-ui, sans-serif",
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
    fontSize: {
      h1: '2.5rem',
      h2: '2rem',
      h3: '1.5rem',
      h4: '1.25rem',
      bodyLarge: '1.125rem',
      body: '1rem',
      bodySmall: '0.875rem',
      caption: '0.75rem',
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.6,
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },
  shadows: {
    neumorphic: '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.9)',
    neumorphicInset: 'inset 8px 8px 16px rgba(0, 0, 0, 0.1), inset -8px -8px 16px rgba(255, 255, 255, 0.9)',
    elevated: '12px 12px 24px rgba(0, 0, 0, 0.15), -12px -12px 24px rgba(255, 255, 255, 0.95)',
  },
  animation: {
    duration: {
      fast: 150,
      normal: 200,
      slow: 300,
      slower: 400,
    },
    easing: {
      easeOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

/**
 * Type-safe color names
 */
export type ColorName = keyof typeof designTokens.colors;

/**
 * Type-safe spacing scale
 */
export type SpacingScale = keyof typeof designTokens.spacing;

/**
 * Type-safe border radius scale
 */
export type BorderRadiusScale = keyof typeof designTokens.borderRadius;

/**
 * Helper function to get color value
 */
export const getColor = (colorName: ColorName): string => {
  return designTokens.colors[colorName];
};

/**
 * Helper function to get spacing value
 */
export const getSpacing = (scale: SpacingScale): string => {
  return designTokens.spacing[scale];
};

/**
 * Helper function to get border radius value
 */
export const getBorderRadius = (scale: BorderRadiusScale): string => {
  return designTokens.borderRadius[scale];
};

/**
 * Helper function to get shadow value
 */
export const getShadow = (type: 'neumorphic' | 'neumorphicInset' | 'elevated'): string => {
  return designTokens.shadows[type];
};

/**
 * CSS custom properties for use in stylesheets
 */
export const cssVariables = {
  '--color-primary': designTokens.colors.primary,
  '--color-secondary': designTokens.colors.secondary,
  '--color-accent': designTokens.colors.accent,
  '--color-background': designTokens.colors.background,
  '--color-surface': designTokens.colors.surface,
  '--color-text-primary': designTokens.colors.textPrimary,
  '--color-text-secondary': designTokens.colors.textSecondary,
  '--color-success': designTokens.colors.success,
  '--color-warning': designTokens.colors.warning,
  '--color-error': designTokens.colors.error,
} as const;
