import { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from '@firebase/auth';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Alert,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Snackbar,
  Typography,
} from '@mui/material';
import { auth } from '@/Api/firebase';
import { ERROR_MESSAGE, ROUTE } from '@/constants';

const NavMenu = (): JSX.Element | undefined => {
  const [pagesLink, setPagesLink] = useState(['']);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const { t } = useTranslation();

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleLogout = async (): Promise<void> => {
    try {
      await signOut(auth);
      navigate(ROUTE.welcomePage);
    } catch (error) {
      setError(ERROR_MESSAGE(t).unknownError);
      setOpen(true);
    }
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  const handleRoute = (page: string): void => {
    switch (page) {
      case 'SignIn':
        navigate(ROUTE.signInPage);
        break;
      case 'SignUp':
        navigate(ROUTE.signUpPage);
        break;
      case 'Logout':
        handleLogout();
        break;
      case 'Main':
        navigate(ROUTE.mainPage);
        break;
      default:
        break;
    }

    handleCloseNavMenu();
  };

  useEffect(() => {
    if (loading) return;
    if (user) {
      setPagesLink(['Main', 'Logout']);
    } else {
      setPagesLink(['SignIn', 'SignUp']);
    }
  }, [user, loading]);

  if (loading) {
    return;
  }

  return (
    <nav>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', sm: 'none' },
          }}
        >
          {pagesLink.map((page) => (
            <MenuItem key={page} onClick={(): void => handleRoute(page)}>
              <Typography textAlign="center">{t(`pages.${page}`)}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
        {pagesLink.map((page) => (
          <Button
            key={page}
            onClick={(): void => handleRoute(page)}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {t(`pages.${page}`)}
          </Button>
        ))}
      </Box>
      <Snackbar
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        sx={{
          marginBottom: 10,
        }}
      >
        <Alert onClose={handleClose} variant="filled" severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </nav>
  );
};

export { NavMenu };
