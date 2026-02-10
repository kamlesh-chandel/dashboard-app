import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '@/utils/auth';
import { ROUTES } from '@/utils/routes';
import type { authCheck } from '@/types/auth.types';

const checkAuth = isAuthenticated as authCheck;

const PublicRoute = () => {
  return checkAuth() ? <Navigate to={ROUTES.DASHBOARD} replace /> : <Outlet />;
};

export default PublicRoute;
