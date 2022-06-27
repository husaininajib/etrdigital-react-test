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
import EnhancedTable from '../components/TableList';

// console.log(JSON.parse(SAMPLE_DATA));
const User = ({ username }) => {
  return (
    <>
      <Navbar username={username} />

      <Container maxWidth="lg" sx={{ border: '1px solid red', mt: 4 }}>
        <EnhancedTable />
        <Box display="flex" justifyContent={'space-between'}>
          <Typography variant="h5" color="text.primary" component={'h1'} align="left" mb={10}>
            Dashboard
          </Typography>
          <Typography variant="h5" color="text.primary" component={'h1'} align="left" mb={10}>
            09/07/2022
          </Typography>
        </Box>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" color="text.primary" component={'h1'} align="center" mb={10}>
            Login
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default User;
