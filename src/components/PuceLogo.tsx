import React from 'react';
import { Theme } from "@mui/material";
import LogoPuce from '../assets/logo-puce.png';
import LogoPuceDark from '../assets/logo-puce-dark.png'
import PuceTheme from '../themes/Theme';
import './PuceLogo.css'


interface LogoPuceProps {
    theme: Theme;
  }


const PuceLogo: React.FC<LogoPuceProps> = ({ theme }) => {
    return(
        <>
            {theme === PuceTheme 
            ? ( <img src={LogoPuce}></img> )
            : ( <img src={LogoPuceDark}></img> )}
        </>
    );
}

export default PuceLogo;