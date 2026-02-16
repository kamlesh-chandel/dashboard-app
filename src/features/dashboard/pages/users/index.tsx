import Sidebar from '@/components/layout/sidebar';
import PageHeader from '@/components/layout/page-header';
import UsersTable from '@/features/dashboard/components/layout/users-table';
import { Button } from '@/components/common/button';

import './index.css';
import '@/styles/theme.css';
import { useState } from 'react';
import UserDialog from '../../components/layout/user-dialog';
import type { FormDataType } from '@/types/ui.types';

const Users: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (data: FormDataType) => {
    setOpen(false);
    console.log(data); //will integrate api later
  }

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-content">
        <PageHeader title="Users" />

        <div className="table-button-wrapper">
          <Button className="add-button" onClick={() => setOpen(true)}>
            Add User
          </Button>

          <UsersTable />
        </div>
      </main>
      <UserDialog open={open} onClose={() => setOpen(false)} onSubmit={handleSubmit} mode="add" />
    </div>
  );
};

export default Users;
