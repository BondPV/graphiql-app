import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, CardMedia } from '@mui/material';
import backgroundImage from '@/assets/bg-welcome.svg';
import boxDownImage from '@/assets/box-wave-down.svg';
import boxUpImage from '@/assets/box-wave-up.svg';
import { AuthContext } from '@/App/App';
import { ROUTE } from '@/constants';

const WelcomePage = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isAuth = useContext(AuthContext);

  const redirect = (): void => {
    if (isAuth) {
      navigate(ROUTE.mainPage);
    } else {
      navigate(ROUTE.signInPage);
    }
  };

  return (
    <Box
      maxWidth="xl"
      sx={{
        margin: '0 auto',
        padding: 0,
        color: 'primary.dark',
        background: 'linear-gradient(222.57deg, #FFFFFF -5.18%, #EBEEF3 24.79%, #DADEEA 71.54%)',
      }}
    >
      <Box
        component="section"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 0',
          background: `url(${backgroundImage}) no-repeat 55% -33rem`,
          minHeight: '62rem',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            fontWeight: 500,
            lineHeight: '13rem',
            letterSpacing: '0.1em',
            color: 'rgba(0, 0, 0, 0.9)',
            textShadow: '-7px 6px 0px #001E6A',
          }}
        >
          {t('GraphiQL')}
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            width: '55%',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          {t('welcomePage.subtitle')}
        </Typography>
        <Button
          variant="contained"
          onClick={redirect}
          sx={{
            width: '30%',
            margin: '4rem 0',
          }}
        >
          {t('welcomePage.startButton')}
        </Button>
      </Box>
      <Box
        component="section"
        sx={{
          background: 'radial-gradient(83.22% 83.22% at 38.66% 1.86%, #000B26 0%, #001E6A 100%)',
        }}
      >
        <Box
          component="div"
          sx={{
            width: '100%',
            minHeight: '19rem',
            background: `url(${boxDownImage}) no-repeat`,
            backgroundSize: 'contain',
            position: 'relative',
            top: '-25px',
            zIndex: '2',
          }}
        ></Box>
        <Typography variant="h2" color="primary" textAlign="center">
          {t('welcomePage.videoSubtitle')}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CardMedia
            component="iframe"
            image="https://www.youtube.com/embed/1V3ZY_TXKwU"
            sx={{
              width: '50%',
              minHeight: '30rem',
              border: 'none',
              margin: '3rem 0',
            }}
          />
        </Box>
        <Box
          component="div"
          sx={{
            width: '100%',
            minHeight: '19rem',
            background: `url(${boxUpImage}) no-repeat`,
            backgroundSize: 'contain',
            position: 'relative',
            top: '25px',
            zIndex: '2',
          }}
        ></Box>
      </Box>
      <Box component="section"></Box>
    </Box>
  );
};

export { WelcomePage };
