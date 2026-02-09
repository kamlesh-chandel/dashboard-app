import {Button} from "@/components/common/button"
import '@/styles/theme.css';
import './index.css';

const Sidebar = () => {
  return (
    <aside className="sidebar flex-col">
      <h2 className="sidebar-title">Admin Panel</h2>
      <div className="nav-wrapper flex-col">
        <nav className="sidebar-nav flex-col">
          <a className="nav-item active">Dashboard</a>
          <a className="nav-item">Settings</a>
        </nav>
        <Button varient="danger">
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
