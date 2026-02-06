import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '@/features/auth/pages/login';
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import("../features/dashboard/pages/dashboard"));

export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Suspense fallback={<div>Loading .....</div>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={
            <Dashboard />
          } />
      </Routes>
          </Suspense>
    </BrowserRouter>
  );
};
