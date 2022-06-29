import React from 'react';
import {
  Typography,
  Container,
  Box,
} from '@mui/material';
import Navbar from '../components/Navbar';
import DashboardTable from '../components/DashboardTable';
import moment from 'moment';

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
            {moment().format('h:mm:ss A')} | {moment().format('DD MMM YYYY')}
          </Typography>
        </Box>
        <DashboardTable />
      </Container>
    </>
  );
};

export default DashBoard;
