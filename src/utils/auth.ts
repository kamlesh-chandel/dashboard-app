import type { authCheck } from '@/types/auth.types';

export const isAuthenticated: authCheck = (): boolean => {
  const isLoggedIn = localStorage.getItem('isAuthenticated');
  return !!isLoggedIn;
};
