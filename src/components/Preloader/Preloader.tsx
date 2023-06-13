import { Container } from '@mui/material';
import { CircularProgress } from '@mui/material';
import { MAIN_CONTENT_HEIGHT } from '@/constants';

interface IPreloader {
  height?: string;
  size?: number;
}

const Preloader = ({ height = MAIN_CONTENT_HEIGHT, size = 70 }: IPreloader): JSX.Element => (
  <Container
    sx={{
      width: '100%',
      height: height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <CircularProgress color="primary" size={size} />
  </Container>
);

export { Preloader };
