import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Grid, SxProps } from '@mui/material';
import Rodi from '../assets/rodi.png'
import './Copyright.css'

interface CopyrightProps {
    sx?: SxProps;
}

const Copyright: React.FC<CopyrightProps> = (props) => {
  return (
    <>
      <Grid 
        container spacing={0}
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        >
        <Grid xs={2}>
          <img src={Rodi} className='rodi' alt="" />
        </Grid>
        <Grid xs={10}>
            <Typography variant='caption' align='center' gutterBottom {...props}>
              {'Copyright © '}
              <Link color="inherit" href="https://rodi.puce.edu.ec/" target="_blank">
                Dirección de Informática
              </Link>
              <br/> 
              <Link color="inherit" href="https://www.puce.edu.ec/" target="_blank">
                Pontificia Universidad Católica del Ecuador
              </Link>
              {' - '}
              {new Date().getFullYear()}
              {'.'}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Copyright;
