import { Container } from '@mui/material';
import { CircularProgress } from '@mui/material';

const Preloader = (): JSX.Element => (
  <Container
    sx={{
      color: 'theme.primary.dark',
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <CircularProgress color="inherit" size={70} />
  </Container>
);

export default Preloader;
