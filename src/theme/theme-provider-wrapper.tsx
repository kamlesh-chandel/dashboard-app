import { ThemeProvider, CssBaseline } from '@mui/material';
import { useMemo, useState } from 'react';
import { getTheme } from '@/theme/theme';
import type { ThemeMode } from '@/types/theme.types';
import { ColorModeContext } from '@/context/color-mode-context';

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
  useMemo(() => {
    document.body.setAttribute('data-theme', mode);
    getTheme(mode);
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
