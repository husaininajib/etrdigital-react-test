import React from 'react';
import {
  Paper,
  Typography,
  Container,
  Box,
  TextField,
  Button,
  FormControl,
  TableHead,
  TableRow,
  TableCell,
} from '@mui/material';
import { SAMPLE_DATA } from '../constants';
import Navbar from '../components/Navbar';
import SampleDataTable from '../components/TableList';

// console.log(JSON.parse(SAMPLE_DATA));
const DashBoard = ({ username }) => {
  return (
    <>
      <Navbar username={username} />

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box display="flex" justifyContent={'space-between'}>
          <Typography variant="h6" color="text.primary" component={'h1'} align="left">
            Dashboard
          </Typography>
          <Typography variant="h6" color="text.primary" component={'h1'} align="left">
            14:06:71 PM | 17 Jun 2022
          </Typography>
        </Box>
        <SampleDataTable />
      </Container>
    </>
  );
};

export default DashBoard;
