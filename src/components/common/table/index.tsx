import * as React from 'react';
import {
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';

interface Column {
  id: string;
  label: string;
  align?: 'left' | 'right' | 'center';
}

interface TableProps<T> {
  columns: readonly Column[];
  data: readonly T[];
  renderRowInBody: (row: T, index: number) => React.ReactNode;
  rowsPerPageOptions?: number[];
  defaultRowsPerPage?: number;
}

const Table = <T,>({
  columns,
  data,
  renderRowInBody,
  rowsPerPageOptions = [10, 25, 100],
  defaultRowsPerPage = 10,
}: TableProps<T>) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null, //_event parameter is mandatory here but never used. _ as a prefix is used to remove ts warning
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const paginatedData = data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

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
        <MuiTable stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align || 'left'}>
                  <b>{column.label}</b>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedData.map((row, index) => renderRowInBody(row, index))}
          </TableBody>
        </MuiTable>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Table;
