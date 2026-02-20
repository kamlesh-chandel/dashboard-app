import Sidebar from '@/components/layout/sidebar';
import PageHeader from '@/components/layout/page-header';

import './index.css';
import '@/styles/theme.css';
import { Button } from '@/components/common/button';
import UsersTable from '@/features/dashboard/components/layout/users-table';

const Users: React.FC = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-content">
        <PageHeader title="Users" />
        <div className="table-button-wrapper">
          <Button className="add-button">Add User</Button>
          <UsersTable />
        </div>
      </main>
    </div>
  );
};

export default Users;
