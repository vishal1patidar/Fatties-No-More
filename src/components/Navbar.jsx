import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link className="logo" to="/">
      <h1>Fatties <span style={{ color: 'red' }}>No More</span></h1>
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" className="navGym" style={{ textDecoration: 'none', color: '#fff', fontSize: '1rem' }}>Home</Link>
      <a href="#exercises" className="navGym SmallNone" style={{ textDecoration: 'none', color: '#fff', fontSize: '1rem' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;
