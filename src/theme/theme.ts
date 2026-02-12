import { createTheme, type Theme } from '@mui/material/styles';
import type { ThemeMode } from '@/types/theme.types';

export const getTheme = (mode: ThemeMode): Theme => {
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,

      primary: {
        main: '#00e0ff',
      },

      background: {
        default: isDark ? '#0f1117' : '#f4f6fb',
        paper: isDark ? '#181c24' : '#ffffff',
      },

      text: {
        primary: isDark ? '#e6edf3' : '#0b1220',
        secondary: isDark ? '#9aa4b2' : '#4b5563',
      },

      divider: isDark ? '#2a3142' : '#e5e7eb',
    },

    typography: {
      fontFamily: `'Orbitron','Inter',sans-serif`,
    },

    shape: {
      borderRadius: 12,
    },

    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            background: isDark ? '#181c24' : '#ffffff',
            border: `1px solid ${isDark ? '#2a3142' : '#e5e7eb'}`,
            boxShadow: 'none',
          },
        },
      },

      MuiAppBar: {
        styleOverrides: {
          root: {
            background: isDark ? '#181c24' : '#ffffff',
            borderBottom: `1px solid ${isDark ? '#2a3142' : '#e5e7eb'}`,
            boxShadow: 'none',
          },
        },
      },
    },
  });
};
