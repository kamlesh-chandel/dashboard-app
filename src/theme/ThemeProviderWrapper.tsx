import { ThemeProvider, CssBaseline } from '@mui/material';
import { useMemo, useState, useEffect } from 'react';
import { getTheme } from '@/theme/theme';
import type { ThemeMode } from '@/types/theme.types';
import { ColorModeContext } from '@/context/ColorModeContext';
import { lightColors, darkColors } from '@/theme/colors';

const STORED_THEME = 'theme';

interface Props {
  children: React.ReactNode;
}

const ThemeProviderWrapper: React.FC<Props> = ({ children }) => {
  const storedTheme =
    (localStorage.getItem(STORED_THEME) as ThemeMode) || 'light';

  const [mode, setMode] = useState<ThemeMode>(storedTheme);

  const toggleTheme = (theme: ThemeMode): void => {
    setMode(theme);
    localStorage.setItem(STORED_THEME, theme);
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  useEffect(() => {
    const colors = mode === 'dark' ? darkColors : lightColors;
    const root = document.documentElement;

    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-primary-hover', colors.primaryHover);
    root.style.setProperty('--color-bg', colors.bg);
    root.style.setProperty('--color-surface', colors.surface);
    root.style.setProperty('--color-surface-2', colors.surface2);
    root.style.setProperty('--color-text', colors.textPrimary);
    root.style.setProperty('--color-border', colors.border);
    root.style.setProperty('--color-heading', colors.heading);
    root.style.setProperty('--color-error', colors.error);
    root.style.setProperty('--color-btn', colors.button);

    document.body.setAttribute('data-theme', mode);
  }, [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeProviderWrapper;
