import { createContext } from 'react';
import type { ColorModeContextType } from '@/types/themeContext.types';

export const ColorModeContext = createContext<ColorModeContextType | undefined>(
  undefined
);
