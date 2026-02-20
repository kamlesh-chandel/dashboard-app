import { createTheme, type Theme } from '@mui/material/styles';
import type { ThemeMode } from '@/types/theme.types';
import { lightColors, darkColors } from './colors';

export const getTheme = (mode: ThemeMode): Theme => {
  const colors = mode === 'dark' ? darkColors : lightColors;

  return createTheme({
    palette: {
      mode,

      primary: {
        main: colors.primary,
      },

      background: {
        default: colors.background,
        paper: colors.surface,
      },

      text: {
        primary: colors.textPrimary,
        secondary: colors.textSecondary,
      },

      divider: colors.border,
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
            background: colors.surface,
            border: `1px solid ${colors.border}`,
            boxShadow: 'none',
          },
        },
      },

      MuiAppBar: {
        styleOverrides: {
          root: {
            background: colors.surface,
            borderBottom: `1px solid ${colors.border}`,
            boxShadow: 'none',
          },
        },
      },
    },
  });
};
