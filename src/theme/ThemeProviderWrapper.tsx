import { ThemeProvider, CssBaseline } from '@mui/material';
import { useMemo, useState, createContext } from 'react';
import { getTheme } from '@/theme/theme';
import type { ThemeMode } from '@/types/theme.types';
import type { ColorModeContextType } from '@/types/theme.types';

export const ColorModeContext = createContext<ColorModeContextType | undefined>(
  undefined
);

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
