import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '@/utils/auth';
import { ROUTES } from '@/utils/routes';
import type { authCheck } from '@/types/auth.types';

const checkAuth = isAuthenticated as authCheck;
const a = 10;
const ProtectedRoute = () => {
  return checkAuth() ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.LOGIN} replace />
  );
};

export default ProtectedRoute;
