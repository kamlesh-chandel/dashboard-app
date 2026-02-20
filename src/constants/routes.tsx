import type { RoutesType, NavItem } from '@/types/routes.types';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';

export const ROUTES: RoutesType = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  SETTINGS: '/settings',
  USERS: '/dashboard/users',
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Dashboard',
    path: ROUTES.DASHBOARD,
    icon: <DashboardIcon />,
  },
  {
    label: 'Settings',
    path: ROUTES.SETTINGS,
    icon: <SettingsIcon />,
  },
];
