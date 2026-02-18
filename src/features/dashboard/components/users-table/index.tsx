import * as React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { tableColumns } from '@/features/dashboard/constants/users';
import Loader from '@/components/common/loader';
import UserDialog from '../user-dialog';
import CommonTable from '@/components/common/table';

import type { CreateUserFormData, UsersTableProps } from '@/types/ui.types';
import type { AssignedGame, usersProps } from '@/types/user.types';

import './index.css';
import '@/styles/theme.css';

const UsersTable: React.FC<UsersTableProps> = ({ users, isLoading }) => {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (data: CreateUserFormData) => {
    setOpen(false);
    console.log(data);
  };

  const renderRow = (row: usersProps, index: number) => (
    <TableRow hover tabIndex={-1} key={index}>
      {tableColumns.map((column) => {
        let value: React.ReactNode;

        if (
          column.id === 'name' ||
          column.id === 'email' ||
          column.id === 'phone'
        ) {
          value = <div>{row[column.id]}</div>;
        }

        if (column.id === 'assignedGames') {
          value = row.assignedGames.map((game: AssignedGame, i: number) => (
            <div key={i}>{game.gameName},</div>
          ));
        }

        if (column.id === 'actions') {
          value = (
            <div className="table-actions">
              <span onClick={() => setOpen(true)}>Edit</span> {' | '}
              Delete
            </div>
          );
        }

        return (
          <TableCell key={column.id} align={column.align || 'left'}>
            {value}
          </TableCell>
        );
      })}
    </TableRow>
  );

  if (isLoading) return <Loader />;

  return (
    <>
      <CommonTable columns={tableColumns} data={users} renderRow={renderRow} />

      <UserDialog
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
        mode="edit"
      />
    </>
  );
};

export default UsersTable;
