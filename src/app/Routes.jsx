import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '@/features/auth/pages/login';
import Loader from '@/components/common/Loader';
import PublicRoute from '@/app/PublicRoute';
import ProtectedRoute from '@/app/ProtectedRoute';
import { ROUTES } from '@/utils/routes';

const Dashboard = lazy(() => import('../features/dashboard/pages/dashboard'));
const Settings = lazy(() => import('../features/settings/pages/settings'));

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<PublicRoute />}>
          <Route path={ROUTES.LOGIN} element={<Login />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route
            path={ROUTES.DASHBOARD}
            element={
              <Suspense fallback={<Loader />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.SETTINGS}
            element={
              <Suspense fallback={<Loader />}>
                <Settings />
              </Suspense>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
      </Routes>
    </BrowserRouter>
  );
};
