import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '@/features/auth/pages/login';
import Loader from '@/components/common/loader';
import { lazy, Suspense } from 'react';
import PublicRoute from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';
import { ROUTES } from '@/constants/routes';
import AppLayout from '@/components/layout/app-layout';

const Dashboard = lazy(() => import('../features/dashboard/pages/dashboard'));
const Settings = lazy(() => import('../features/settings/pages/settings'));
const Users = lazy(() => import('../features/dashboard/pages/users'));

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path={ROUTES.LOGIN} element={<Login />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
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
            <Route
              path={ROUTES.USERS}
              element={
                <Suspense fallback={<Loader />}>
                  <Users />
                </Suspense>
              }
            />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
      </Routes>
    </BrowserRouter>
  );
};
