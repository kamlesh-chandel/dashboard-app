import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '@/features/auth/pages/login';
import Loader from '@/components/common/Loader';
import { lazy, Suspense } from 'react';
import PublicRoute from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';

const Dashboard = lazy(() => import('../features/dashboard/pages/dashboard'));

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Suspense fallback={<Loader />}>
                <Dashboard />
              </Suspense>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
