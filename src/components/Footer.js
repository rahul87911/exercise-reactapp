import React from 'react';
import { Box, Stack, Typograghy } from '@mui/system';
import Logo from '../assets/images/Logo-1.png'
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box mt="80x" bgcolor="#fff3f4">
       <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px"/>
        <Typography>
          FITNATION
        </Typography>
       
      </Stack>
       </Box>
  )
}

export default Footer