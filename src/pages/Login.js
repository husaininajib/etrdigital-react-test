import { Paper, Typography, Container, Box, TextField, Button, FormControl } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
  username: yup.string().required('This field is required'),
  password: yup.string().required('This field is required'),
});

const Login = ({ setUsername }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      console.log(values);
      setUsername(values.username);
      navigate('/user');
    },
  });

  return (
    <Container maxWidth="lg" sx={{ border: '1px solid red', mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" color="text.primary" component={'h1'} align="center" mb={10}>
          Login
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4 }}>
          <FormControl
            sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2 }}
          >
            <TextField
              id="username"
              label="Username"
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.username}
              required
              error={!!formik.errors.username}
              helperText={formik.errors.username ?? ''}
            />
            <TextField
              id="password"
              label="Password"
              variant="standard"
              type={'password'}
              onChange={formik.handleChange}
              value={formik.values.password}
              required
              error={!!formik.errors.password}
              helperText={formik.errors.password ?? ''}
            />
          </FormControl>
          <Button variant="contained" onClick={() => formik.handleSubmit()}>
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
