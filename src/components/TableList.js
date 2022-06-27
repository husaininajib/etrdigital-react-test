import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, alpha } from '@mui/material/styles';
import {
  Paper,
  Typography,
  Container,
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Divider,
  Chip,
  TableHead,
  TableRow,
  TableCell,
  Toolbar,
  TableContainer,
  Table,
  TableBody,
  TableSortLabel,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SAMPLE_DATA } from '../constants';

const headCells = [
  {
    id: 'date',
    numeric: false,
    label: 'Tarikh',
  },
  {
    id: 'sourceFrom',
    numeric: true,
    label: 'Sumber',
  },
  {
    id: 'reporterName',
    numeric: true,
    label: 'Nama',
  },
  {
    id: 'serialNo',
    numeric: true,
    label: 'No Siri',
  },
  {
    id: 'referenceNo',
    numeric: true,
    disablePadding: false,
    label: 'No Rujukan Fail',
  },
  {
    id: 'category',
    numeric: true,
    label: 'Kategori',
  },
  {
    id: 'status',
    numeric: true,
    label: 'Status',
  },
];

export default function SampleDataTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [arrowTopDirection, setArrowTopDirection] = React.useState(true);
  const [sortBy, setSortBy] = React.useState('date');

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    console.log(sortBy, arrowTopDirection);
  }, [sortBy]);

  const toggleDirection = (id, sortby) => {
    setSortBy(id);
    if (id === sortby) {

    }
    setArrowTopDirection((prev) => !prev);
    console.log('hello');
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        }}
      >
        <Typography sx={{ flex: '1 1 100%' }} variant="h5" id="tableTitle" component="h2">
          Senarai
        </Typography>
      </Toolbar>
      <Divider sx={{ borderWidth: 1.5, mb: 4 }} />

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
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={'medium'}>
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell key={headCell.id} align={'left'} padding={'normal'} sx={{ fontWeight: 'bold' }}>
                    {headCell.label}
                    <TableSortLabel
                      active
                      direction={ headCell.id === sortBy && arrowTopDirection ? 'asc' : 'desc'}
                      onClick={() => toggleDirection(headCell.id, sortBy)}
                    ></TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {SAMPLE_DATA.map((data, key) => (
                <TableRow key={key}>
                  <TableCell align="left">{data.date}</TableCell>
                  <TableCell align="left">{data.sourceFrom}</TableCell>
                  <TableCell align="left">{data.reporterName}</TableCell>
                  <TableCell align="left">{data.serialNo}</TableCell>
                  <TableCell align="left">{data.referenceNo}</TableCell>
                  <TableCell align="left">{data.category}</TableCell>
                  <TableCell align="left">
                    <Chip color="success" label={data.status} />
                  </TableCell>
                </TableRow>
              ))}
              <TableRow></TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
