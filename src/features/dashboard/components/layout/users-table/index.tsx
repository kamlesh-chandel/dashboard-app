import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { tableColumns, users } from '@/features/dashboard/constants/users';
import UserDialog from '../user-dialog';
import type { FormDataType } from '@/types/ui.types';

import './index.css';
import '@/styles/theme.css';

const UsersTable: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (data: FormDataType) => {
    setOpen(false);
    console.log(data); //will integrate api later
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getColumnNames = () => {
    return tableColumns.map((column) => (
      <TableCell key={column.id} align={column.align || 'left'}>
        <b>{column.label}</b>
      </TableCell>
    ));
  };

  const getRowsData = () => {
    return users
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((row, index) => (
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
              value = row.assignedGames.map((game) => (
                <div>{game.gameName},</div>
              ));
            }

            if (column.id === 'actions') {
              value = (
                <div className="table-actions">
                  {' '}
                  <span onClick={() => setOpen(true)}>Edit</span> {' | '} Delete
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
      ));
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer
        sx={{
          maxHeight: {
            xs: 330,
            md: 580,
          },
        }}
      >
        <Table stickyHeader aria-label="users table">
          <TableHead>
            <TableRow>{getColumnNames()}</TableRow>
          </TableHead>

          <TableBody>{getRowsData()}</TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <UserDialog
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
        mode="edit"
      />
    </Paper>
  );
};

export default UsersTable;
