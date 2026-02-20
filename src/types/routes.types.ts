import type { ReactNode } from 'react';

export type RouteKey = 'LOGIN' | 'DASHBOARD' | 'SETTINGS';

export type RoutesType = Record<RouteKey, string>;

export interface NavItem {
  label: string;
  path: string;
  icon: ReactNode;
}
