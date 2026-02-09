import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '@/utils/auth';
import { ROUTES } from '@/utils/routes';

const PublicRoute = () => {
  return isAuthenticated() ? (
    <Navigate to={ROUTES.DASHBOARD} replace />
  ) : (
    <Outlet />
  );
};

export default PublicRoute;
