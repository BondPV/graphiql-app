import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
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
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export { Layout };
