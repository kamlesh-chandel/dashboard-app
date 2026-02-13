import Sidebar from '@/components/layout/sidebar';
import PageHeader from '@/components/layout/page-header';

import './index.css';
import '@/styles/theme.css';

const Dashboard: React.FC = () => {

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-content">
        <PageHeader title="Users" />
        <div>
          Table
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
