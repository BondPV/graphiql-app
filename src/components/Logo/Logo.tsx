import { Stack, Typography } from '@mui/material';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import { useNavigate } from 'react-router-dom';

const Logo = (): JSX.Element => {
  const navigate = useNavigate();

  const redirectToWelcomePage = (): void => {
    navigate('/');
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      onClick={redirectToWelcomePage}
      sx={{
        '&:hover': {
          color: 'secondary.main',
        },
      }}
    >
      <AutoAwesomeMosaicIcon sx={{ cursor: 'pointer' }} />
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          fontWeight: 500,
          letterSpacing: '.2rem',
          color: 'inherit',
          textDecoration: 'none',
          cursor: 'pointer',
        }}
      >
        LOGO
      </Typography>
    </Stack>
  );
};

export { Logo };
