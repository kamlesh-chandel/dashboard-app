import type { RoutesType, NavItem } from '@/types/routes.types';

export const ROUTES: RoutesType = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  SETTINGS: '/settings',
};
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
  { label: 'Settings', path: '/settings', icon: <SettingsIcon /> },
];
