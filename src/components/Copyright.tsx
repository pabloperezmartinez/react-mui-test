import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { SxProps } from '@mui/material';
import Rodi from '../assets/rodi.png'
import './Copyright.css'

interface CopyrightProps {
    sx?: SxProps;
}

const Copyright: React.FC<CopyrightProps> = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      <img src={Rodi} className='rodi' alt="" />
      <br />
      {'Copyright © '}
      <Link color="inherit" href="https://rodi.puce.edu.ec/">
        Dirección de Informática
      </Link>
      <br/> Pontificia Universidad Católica del Ecuador - 
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;
