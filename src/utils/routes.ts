import type { RoutesType, NavItem } from '@/types/routes.types';

export const ROUTES: RoutesType = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  SETTINGS: '/settings',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Settings', path: '/settings' },
];
