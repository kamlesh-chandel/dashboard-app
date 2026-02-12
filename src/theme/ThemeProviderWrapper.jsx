import { ThemeProvider, CssBaseline } from '@mui/material';
import { useMemo, useState, createContext } from 'react';
import { getTheme } from '@/theme/theme';

export const ColorModeContext = createContext();

const STORED_THEME = 'theme';

const ThemeProviderWrapper = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem(STORED_THEME) || 'light');

  const toggleTheme = (theme) => {
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
