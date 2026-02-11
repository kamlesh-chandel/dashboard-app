import { createTheme, type Theme } from '@mui/material/styles';
import type { ThemeMode } from '@/types/theme.types';

export const getTheme = (mode: ThemeMode): Theme =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#4f46e5',//mui does not support constant colors
      },
    },
  });
