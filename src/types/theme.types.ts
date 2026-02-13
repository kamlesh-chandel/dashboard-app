export type ThemeMode = 'light' | 'dark';

export interface ColorModeContextType {
  mode: ThemeMode;
  toggleTheme: (theme: ThemeMode) => void;
}
