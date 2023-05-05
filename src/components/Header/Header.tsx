import { AppBar, Container, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import { useNavigate } from 'react-router-dom';
import { NavMenu } from '../NavMenu';
import { LanguageSwitcher } from '../LanguageSwitcher';

const Header = (): JSX.Element => {
  const trigger = useScrollTrigger({ threshold: 80, disableHysteresis: true });
  const navigate = useNavigate();

  const redirectToWelcomePage = (): void => {
    navigate('/');
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: `${!trigger ? 'primary.dark' : 'primary.main'}` }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AutoAwesomeMosaicIcon sx={{ display: { sm: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={redirectToWelcomePage}
            sx={{
              mr: 'auto',
              display: { xs: 'none', sm: 'flex' },
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            LOGO
          </Typography>
          <NavMenu />
          <LanguageSwitcher />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export { Header };
