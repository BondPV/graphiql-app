import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { COLORS } from '@/constants';

let theme = createTheme({
  palette: {
    background: {
      default: COLORS.default,
    },
    primary: {
      light: COLORS.primaryLight,
      main: COLORS.primaryMain,
      dark: COLORS.primaryDark,
      contrastText: COLORS.primaryContrastText,
    },
    secondary: {
      main: COLORS.secondaryMain,
    },
    error: {
      main: COLORS.errorMain,
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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          '&::-webkit-scrollbar': {
            height: '5px',
            width: '5px',
          },
          '&::webkit-scrollbar-track': {
            background: COLORS.primaryLight,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: COLORS.primaryMain,
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
