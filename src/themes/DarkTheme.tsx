import { createTheme } from '@mui/material/styles';

const PuceDarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00a0dd',
            contrastText: '#eeeeee',
        },
        secondary: {
            main: '#f44336',
        },
    },
});

export default PuceDarkTheme;