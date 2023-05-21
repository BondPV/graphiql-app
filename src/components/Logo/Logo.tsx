import { useNavigate } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import QueryStatsIcon from '@mui/icons-material/QueryStats';

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
        transition: '0.3s',
        '&:hover': {
          color: 'primary.main',
        },
      }}
    >
      <QueryStatsIcon sx={{ cursor: 'pointer' }} />
      <Typography
        variant="h5"
        noWrap
        component="span"
        sx={{
          fontWeight: 400,
          letterSpacing: '-0.05rem',
          cursor: 'pointer',
        }}
      >
        GCE
      </Typography>
    </Stack>
  );
};

export { Logo };
