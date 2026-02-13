import { createContext } from 'react';
import type { ColorModeContextType } from '@/types/theme.types';

export const ColorModeContext = createContext<ColorModeContextType | undefined>(
  undefined
);
