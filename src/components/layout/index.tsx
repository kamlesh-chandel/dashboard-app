import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './sidebar';
import Navbar from './navbar';
import { ROUTES } from '@/constants/routes';
import './index.css';
import '@/styles/theme.css';

const getTitleFromRoute = (pathname: string): string => {
  if (pathname.startsWith(ROUTES.USERS)) return 'Users';
  if (pathname.startsWith(ROUTES.SETTINGS)) return 'Settings';
  if (pathname.startsWith(ROUTES.DASHBOARD)) return 'Dashboard';
  return 'Dashboard';
};

const Layout = () => {
  const location = useLocation();
  const title = getTitleFromRoute(location.pathname);

  return (
    <div className="layout-container">
      <Sidebar />

      <main className="layout-content">
        <Navbar title={title} />
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
