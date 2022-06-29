import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Navbar({ username }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Container sx={{ display: 'flex' }}>
            <Box sx={{ flexGrow: 1 }} />
            <Typography variant="h6" component="h4">
              {username}
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
