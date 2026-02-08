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
    <aside className="sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <div className="nav-wrapper">
        <nav className="sidebar-nav">
          <a className="nav-item active">Dashboard</a>
          <a className="nav-item">Settings</a>
        </nav>
        <Button
          style={{ backgroundColor: 'var(--color-error)' }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
