import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '@/utils/auth';
import { ROUTES } from '@/utils/routes';

const ProtectedRoute = () => {
   return isAuthenticated() ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace />;
};

export default ProtectedRoute;
