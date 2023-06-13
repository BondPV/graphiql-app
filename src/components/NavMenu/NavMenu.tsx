import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { signOut } from '@firebase/auth';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Container, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { auth } from '@/Api/firebase';
import { ERROR_MESSAGE, ROUTE } from '@/constants';
import { useAppDispatch } from '@/hooks/redux';
import { setAlertMsg } from '@/redux/slice';

const NavMenu = (): JSX.Element => {
  const [pagesLink, setPagesLink] = useState(['']);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleLogout = async (): Promise<void> => {
    try {
      await signOut(auth);
      navigate(ROUTE.welcomePage);
    } catch (error) {
      dispatch(setAlertMsg({ message: ERROR_MESSAGE(t).unknownError }));
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
    return <Container></Container>;
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
            sx={{
              my: 2,
              color: 'white',
              display: 'block',
              transition: '0.3s',
              '&:hover': {
                color: 'primary.light',
              },
            }}
          >
            {t(`pages.${page}`)}
          </Button>
        ))}
      </Box>
    </nav>
  );
};

export { NavMenu };
