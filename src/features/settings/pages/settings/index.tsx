import Sidebar from '@/components/layout/sidebar';
import { Typography, Stack, Switch } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from '@/theme/ThemeProviderWrapper';
import type { ColorModeContextType } from '@/types/themeContext.types';
import './index.css';
import '@/styles/theme.css';

const Settings: React.FC = () => {
  const context = useContext(ColorModeContext) as ColorModeContextType;
  const { toggleTheme, mode } = context;

  const handleToggleTheme = (): void => {
    const storedTheme = localStorage.getItem('theme');
    toggleTheme(storedTheme === 'light' ? 'dark' : 'light');
  };
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-content">
        <div className="content-header">
          <h1>Settings</h1>
        </div>
        <div className="content-body">
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body2">
              {mode === 'dark' ? 'Toggle to Light' : 'Toggle to Dark'}
            </Typography>
            <Switch checked={mode === 'dark'} onChange={handleToggleTheme} />
          </Stack>
        </div>
      </main>
    </div>
  );
};

export default Settings;
