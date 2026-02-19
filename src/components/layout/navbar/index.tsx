import type { NavbarProps } from '@/types/ui.types';
import './index.css';
import '@/styles/theme.css';

const Navbar = ({ title }: NavbarProps) => {
  const storedUser = localStorage.getItem('user');

  const userEmail = storedUser
    ? JSON.parse(storedUser)?.email || 'User'
    : 'User';

  return (
    <div className="dashboard-heading-wrapper">
      <h2>{title}</h2>
      <div>
        Welcome, <span className="user-email">{userEmail}</span>
      </div>
    </div>
  );
};

export default Navbar;
