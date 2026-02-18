import { Typography, Stack, Switch } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from '@/context/color-mode-context';
import type { ColorModeContextType } from '@/types/theme.types';

const Settings = () => {
  const context = useContext(ColorModeContext) as ColorModeContextType;
  const { toggleTheme, mode } = context;

  const handleToggleTheme = (): void => {
    const storedTheme = localStorage.getItem('theme');
    toggleTheme(storedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography variant="body2">
          {mode === 'dark' ? 'Toggle to Light' : 'Toggle to Dark'}
        </Typography>
        <Switch checked={mode === 'dark'} onChange={handleToggleTheme} />
      </Stack>
    </>
  );
};

export default Settings;
