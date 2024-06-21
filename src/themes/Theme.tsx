import { createTheme } from '@mui/material/styles';

const PuceTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00a0dd',
      contrastText: '#eeeeee',
    },
    secondary: {
      main: '#f44336',
    },
  },
});


export default PuceTheme;
