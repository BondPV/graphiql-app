import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    background: {
      default: '#DADEEA',
    },
    primary: {
      light: '#DADEEA',
      main: '#929fc1',
      dark: '#001E6A',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: 'Rubik, sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

const themeGlobalStyles = {
  '*': {
    '&::-webkit-scrollbar': {
      width: '5px',
    },
    '&::webkit-scrollbar-track': {
      background: '#DADEEA',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#929fc1',
    },
  },
};

export { theme, themeGlobalStyles };
