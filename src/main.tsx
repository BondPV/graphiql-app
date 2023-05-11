import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import { App } from './App';
import { theme, themeGlobalStyles } from './theme/theme';
import './i18n/config';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './Api/firebase';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles styles={themeGlobalStyles} />
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
