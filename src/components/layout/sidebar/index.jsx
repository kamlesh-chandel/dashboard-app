import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/common/button';

import './index.css';
import '@/styles/theme.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <aside className="sidebar flex-col">
      <h2 className="sidebar-title">Admin Panel</h2>
      <div className="nav-wrapper flex-col">
        <nav className="sidebar-nav flex-col">
          <a className="nav-item active">Dashboard</a>
          <a className="nav-item">Settings</a>
        </nav>
        <Button varient="danger" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
