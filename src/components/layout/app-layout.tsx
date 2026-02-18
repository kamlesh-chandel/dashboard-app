import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './sidebar';
import Navbar from './navbar';
import { ROUTES } from '@/constants/routes';
import './layout.css';
import '@/styles/theme.css';

const getTitleFromRoute = (pathname: string): string => {
  if (pathname.startsWith(ROUTES.USERS)) return 'Users';
  if (pathname.startsWith(ROUTES.SETTINGS)) return 'Settings';
  if (pathname.startsWith(ROUTES.DASHBOARD)) return 'Dashboard';
  return 'Dashboard';
};

const AppLayout = () => {
  const location = useLocation();
  const title = getTitleFromRoute(location.pathname);

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="app-content">
        <Navbar title={title} />
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
