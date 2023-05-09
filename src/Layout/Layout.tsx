import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

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
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};

export { Layout };
