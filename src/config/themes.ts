import type { Theme } from '@/types/theme';

// Color Palettes
const colorPalettes = {
  'calm-professional': {
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
  'modern-wellness': {
    primary: '#4F46E5',
    secondary: '#A78BFA',
    accent: '#34D399',
    background: '#FEFEFE',
    surface: '#F5F3FF',
    textPrimary: '#1E1B4B',
    textSecondary: '#6B7280',
    success: '#10B981',
    warning: '#FBBF24',
    error: '#F43F5E',
  },
  'warm-earth': {
    primary: '#C2704B',
    secondary: '#2D5A4A',
    accent: '#D4A853',
    background: '#FDF9F6',
    surface: '#F5EDE4',
    textPrimary: '#2C1810',
    textSecondary: '#6B5B4F',
    success: '#84CC16',
    warning: '#FB923C',
    error: '#DC2626',
  },
};

// Design Styles
const designStyles = {
  'clean-card': {
    borderRadius: '12px',
    shadow: '0 2px 8px rgba(0,0,0,0.08)',
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 600,
    },
  },
  'soft-neumorphic': {
    borderRadius: '16px',
    shadow: '8px 8px 16px rgba(0,0,0,0.1), -8px -8px 16px rgba(255,255,255,0.9)',
    fontFamily: 'Outfit, system-ui, sans-serif',
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  'minimalist-clinical': {
    borderRadius: '0px',
    shadow: 'none',
    fontFamily: 'DM Sans, system-ui, sans-serif',
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 600,
    },
  },
};

// Generate all theme combinations
export const themes: Theme[] = [];

Object.entries(colorPalettes).forEach(([paletteKey, colors]) => {
  Object.entries(designStyles).forEach(([styleKey, design]) => {
    const paletteName = paletteKey.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    const styleName = styleKey.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());

    themes.push({
      id: `${paletteKey}-${styleKey}`,
      name: `${paletteName} + ${styleName}`,
      colors,
      design,
    });
  });
});

// Helper functions
export const getThemeByPaletteAndStyle = (palette: string, style: string): Theme | undefined => {
  return themes.find(theme => theme.id === `${palette}-${style}`);
};

export const getThemesByPalette = (palette: string): Theme[] => {
  return themes.filter(theme => theme.id.startsWith(palette));
};

export const getThemesByStyle = (style: string): Theme[] => {
  return themes.filter(theme => theme.id.endsWith(style));
};