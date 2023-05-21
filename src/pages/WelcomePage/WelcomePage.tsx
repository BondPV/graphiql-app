import { useAuthState } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Box, Button, CardMedia, Typography } from '@mui/material';
import { auth } from '@/Api/firebase';
import backgroundImage from '@/assets/bg-welcome.svg';
import boxDownImage from '@/assets/box-wave-down.svg';
import boxUpImage from '@/assets/box-wave-up.svg';
import { GridAdvantages } from '@/components/GridAdvantages';
import { TeamCards } from '@/components/TeamCards';
import { COLORS, ROUTE } from '@/constants';

const WelcomePage = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const redirect = (): void => {
    if (user) {
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
        color: 'primary.dark',
        background: COLORS.gradient.light,
      }}
    >
      <Box
        component="section"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: `url(${backgroundImage}) no-repeat 55% -33rem`,
          minHeight: '62rem',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            fontWeight: 500,
            letterSpacing: { xs: 'auto', md: '0.1em' },
            color: 'rgba(0, 0, 0, 0.9)',
            textShadow: { xs: '-4px 3px 0px #001E6A', md: '-7px 6px 0px #001E6A' },
          }}
        >
          {t('GraphiQL Country Explorer')}
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{ width: '55%', textAlign: 'center', padding: '3rem 0' }}
        >
          {t('welcomePage.description')}
        </Typography>
        <Button variant="contained" onClick={redirect} sx={{ width: '30%', margin: '2rem 0' }}>
          {t('welcomePage.startButton')}
        </Button>
      </Box>
      <Box component="section" sx={{ background: COLORS.gradient.dark }}>
        <Box
          component="div"
          sx={{
            minHeight: { xs: '6rem', md: '13rem', xl: '17rem' },
            background: `url(${boxDownImage}) no-repeat`,
            backgroundSize: 'cover',
            position: 'relative',
            top: '-21px',
          }}
        ></Box>
        <Box>
          <Typography variant="h2" color="primary" textAlign="center">
            {t('welcomePage.subtitleAdvantages')}
          </Typography>
          <GridAdvantages />
        </Box>
        <Box component="section">
          <Typography variant="h2" color="primary" textAlign="center">
            {t('welcomePage.videoSubtitle')}
          </Typography>
          <Box>
            <CardMedia
              component="iframe"
              image="https://www.youtube.com/embed/1V3ZY_TXKwU"
              sx={{
                width: { xs: '80%', md: '50%' },
                minHeight: '30rem',
                border: 'none',
                margin: '3rem auto',
              }}
            />
          </Box>
          <Box
            component="div"
            sx={{
              minHeight: { xs: '6rem', md: '13rem', xl: '17rem' },
              background: `url(${boxUpImage}) no-repeat`,
              backgroundSize: 'cover',
              position: 'relative',
              bottom: '-2px',
            }}
          ></Box>
        </Box>
      </Box>
      <Box component="section" sx={{ backgroundColor: 'primary.light' }}>
        <Typography variant="h2" color="primary" textAlign="center">
          {t('welcomePage.team')}
        </Typography>
        <TeamCards />
      </Box>
    </Box>
  );
};

export { WelcomePage };
