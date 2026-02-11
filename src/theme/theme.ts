import { createTheme, type Theme } from '@mui/material/styles';
import type { ThemeMode } from '@/types/theme.types';
import { COLORS } from '@/theme/colors';

export const getTheme = (mode: ThemeMode): Theme =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: COLORS.primary,
      },
    },
  });
