import UsersTable from '@/features/dashboard/components/users-table';
import { Button } from '@/components/common/button';

import './index.css';
import '@/styles/theme.css';
import { useState } from 'react';
import UserDialog from '../../components/user-dialog';
import type { CreateUserFormData } from '@/types/ui.types';
import { createUser } from '@/services/user.service';
import { useUsers } from '@/hooks/useUsers';
import { toast } from 'react-toastify';

const Users: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { users, isLoading, refetch } = useUsers();

  const handleSubmit = async (data: CreateUserFormData) => {
    try {
      await createUser(data);
      setOpen(false);
      await refetch();
      toast.success('New User Created');
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Failed to Create User');
      }
    }
  };

  return (
    <>
      <div className="table-button-wrapper">
        <Button className="add-button" onClick={() => setOpen(true)}>
          Add User
        </Button>
        {!isLoading && users.length === 0 ? (
          <div className="no-users-wrapper">
            <h2>No Users Yet</h2>
            <p>Create your first user to see data here</p>
          </div>
        ) : (
          <UsersTable users={users} isLoading={isLoading} />
        )}
      </div>
      <UserDialog
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
        mode="add"
      />
    </>
  );
};

export default Users;
