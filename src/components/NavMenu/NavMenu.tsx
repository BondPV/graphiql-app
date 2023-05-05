import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AuthContext } from '../../App';
import { PATCH } from '../../constants';
import { getAuth, signOut } from '@firebase/auth';

const NavMenu = (): JSX.Element => {
  const [pagesLink, setPagesLink] = useState(['']);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const isAuth = useContext(AuthContext);
  const auth = getAuth();
  const { t } = useTranslation();

  const handleLogout = (): void => {
    signOut(auth)
      .then(() => {
        navigate(PATCH.welcomePage);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  const handleRoute = (page: string): void => {
    if (page === 'SignIn') {
      navigate(PATCH.signInPage);
    }

    if (page === 'SignUp') {
      navigate(PATCH.signUpPage);
    }

    if (page === 'Logout') {
      handleLogout();
    }

    if (page === 'Main') {
      navigate(PATCH.mainPage);
    }

    handleCloseNavMenu();
  };

  useEffect(() => {
    if (isAuth) {
      setPagesLink(['Main', 'Logout']);
    } else {
      setPagesLink(['SignIn', 'SignUp']);
    }
  }, [isAuth]);

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
    </>
  );
};

export { NavMenu };
