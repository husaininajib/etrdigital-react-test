import * as React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography,
  Paper,
  Divider,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Button,
  Chip,
} from '@mui/material';
import EnhancedTableHead from './EnhancedTableHead';
import SearchIcon from '@mui/icons-material/Search';
import { getComparator, stableSort } from '../utils';
import { SAMPLE_DATA } from '../constants';
import moment from 'moment';

const formattedData = SAMPLE_DATA.map((data) => {
  const [day, month, year] = data.date.split('/');

  const result = [year, month, day].join('-');
  return { ...data, date: moment(result).format('YYYY-MM-DD') };
});

export default function DashboardTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('date');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    console.log(newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Box sx={{ px: { sm: 2 }, mt: 4, pt: 4 }}>
          <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
            Senarai
          </Typography>

          <Divider sx={{ borderWidth: 1.5, mb: 4, mt: 2 }} />

          <Box mb={3} display="flex" justifyContent="center" gap={2}>
            <FormControl sx={{ minWidth: '200px' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
              <OutlinedInput
                id={'search'}
                type={'text'}
                // value={values.password}
                // onChange={handleChange('password')}
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
                label=""
              />
            </FormControl>
            <Button variant="contained" sx={{ minWidth: '80px' }}>
              Cari
            </Button>
          </Box>
        </Box>

        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={'medium'}>
            <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
            <TableBody>
              {stableSort(formattedData, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      <TableCell align="left">{row.date}</TableCell>
                      <TableCell align="left">{row.sourceFrom}</TableCell>
                      <TableCell align="left">{row.operatorName}</TableCell>
                      <TableCell align="left">{row.serialNo}</TableCell>
                      <TableCell align="left">{row.referenceNo}</TableCell>
                      <TableCell align="left">{row.category}</TableCell>
                      <TableCell align="left">
                        <Chip label={row.status} color="success" />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[2, 4, 6]}
          component="div"
          count={SAMPLE_DATA.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
