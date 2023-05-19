import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { AlertMsg } from '../AlertMsg';
import ErrorBoundary from '../ErrorBoundary';
import { Fallback } from '../Fallback';
import { Footer } from '../Footer';
import { Header } from '../Header';

const Layout = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Box component="main">
        <ErrorBoundary fallback={<Fallback />}>
          <Outlet />
          <AlertMsg />
        </ErrorBoundary>
      </Box>
      <Footer />
    </Box>
  );
};

export { Layout };
