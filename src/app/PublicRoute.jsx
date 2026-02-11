import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '@/utils/auth';
import { ROUTES } from '@/utils/routes';

const PublicRoute = () => {
  return !isAuthenticated() ? <Outlet /> : <Navigate to={ROUTES.DASHBOARD} replace />
};

export default PublicRoute;
