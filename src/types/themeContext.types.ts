import type { ThemeMode } from './theme.types';

export interface ColorModeContextType {
  mode: ThemeMode;
  toggleTheme: (theme: ThemeMode) => void;
}
