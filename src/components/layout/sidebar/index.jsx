import './index.css';
import '@/styles/theme.css';
import {Button} from "@/components/common/button"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <div className="nav-wrapper">
        <nav className="sidebar-nav">
          <a className="nav-item active">Dashboard</a>
          <a className="nav-item">Settings</a>
        </nav>
        <Button style={{backgroundColor:'var(--color-error)'}}>
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
