import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '@/features/auth/pages/login';
import Loader from '@/components/common/Loader';
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('../features/dashboard/pages/dashboard'));

export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<Loader />}>
                <Dashboard />
              </Suspense>
            }
          />
        </Routes>
    </BrowserRouter>
  );
};
