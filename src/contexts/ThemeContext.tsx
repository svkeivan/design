import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Theme, ColorPalette, DesignStyle } from '@/types/theme';
import { themes, getThemeByPaletteAndStyle } from '@/config/themes';

interface ThemeContextType {
  currentTheme: Theme;
  currentPalette: ColorPalette;
  currentStyle: DesignStyle;
  setPalette: (palette: ColorPalette) => void;
  setStyle: (style: DesignStyle) => void;
  setTheme: (palette: ColorPalette, style: DesignStyle) => void;
  allThemes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultPalette?: ColorPalette;
  defaultStyle?: DesignStyle;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultPalette = 'calm-professional',
  defaultStyle = 'clean-card',
}) => {
  const [currentPalette, setCurrentPalette] = useState<ColorPalette>(defaultPalette);
  const [currentStyle, setCurrentStyle] = useState<DesignStyle>(defaultStyle);

  const currentTheme = getThemeByPaletteAndStyle(currentPalette, currentStyle) || themes[0];

  // Apply theme to CSS variables
  useEffect(() => {
    const root = document.documentElement;

    // Apply colors
    Object.entries(currentTheme.colors).forEach(([key, value]) => {
      const cssVar = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      root.style.setProperty(cssVar, value);
    });

    // Apply design properties
    root.style.setProperty('--border-radius', currentTheme.design.borderRadius);
    root.style.setProperty('--shadow', currentTheme.design.shadow);
    root.style.setProperty('--font-family', currentTheme.design.fontFamily);
    root.style.setProperty('--font-weight-normal', currentTheme.design.fontWeight.normal.toString());
    root.style.setProperty('--font-weight-medium', currentTheme.design.fontWeight.medium.toString());
    root.style.setProperty('--font-weight-bold', currentTheme.design.fontWeight.bold.toString());

    // Apply background and text colors
    root.style.setProperty('--bg-primary', currentTheme.colors.background);
    root.style.setProperty('--bg-surface', currentTheme.colors.surface);
    root.style.setProperty('--text-primary', currentTheme.colors.textPrimary);
    root.style.setProperty('--text-secondary', currentTheme.colors.textSecondary);
  }, [currentTheme]);

  const setPalette = (palette: ColorPalette) => {
    setCurrentPalette(palette);
  };

  const setStyle = (style: DesignStyle) => {
    setCurrentStyle(style);
  };

  const setTheme = (palette: ColorPalette, style: DesignStyle) => {
    setCurrentPalette(palette);
    setCurrentStyle(style);
  };

  const value: ThemeContextType = {
    currentTheme,
    currentPalette,
    currentStyle,
    setPalette,
    setStyle,
    setTheme,
    allThemes: themes,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};