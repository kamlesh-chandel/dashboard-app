import * as React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { tableColumns } from '@/features/dashboard/constants/users';
import Loader from '@/components/common/loader';
import UserDialog from '../user-dialog';
import Table from '@/components/common/table';

import type { CreateUserFormData, UsersTableProps } from '@/types/ui.types';
import type { AssignedGame, usersProps } from '@/types/user.types';

import './index.css';
import '@/styles/theme.css';

const UsersTable = ({ users, isLoading }: UsersTableProps) => {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (data: CreateUserFormData) => {
    setOpen(false);
    console.log(data);
  };

  const getCellValue = (columnId: string, row: usersProps) => {
    switch (columnId) {
      case 'name':
      case 'email':
      case 'phone':
        return <div>{row[columnId]}</div>;

      case 'assignedGames':
        return row.assignedGames.map(({ gameName }: AssignedGame) => (
          <div key={gameName}>{gameName},</div>
        ));

      case 'actions':
        return (
          <div className="table-actions">
            <span onClick={() => setOpen(true)}>Edit</span> {' | '} Delete
          </div>
        );

      default:
        return null;
    }
  };


  const renderRowInBody = (row: usersProps, rowIndex: number) => (
    <TableRow hover tabIndex={-1} key={rowIndex}>
      {tableColumns.map((column) => {

        return (
          <TableCell key={column.id} align={column.align || 'left'}>
            {getCellValue(column.id, row)}
          </TableCell>
        );
      })}
    </TableRow>
  );

  if (isLoading) return <Loader />;

  return (
    <>
      <Table
        columns={tableColumns}
        data={users}
        renderRowInBody={renderRowInBody}
      />

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
