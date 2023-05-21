import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, CardMedia, Card, CardContent, Grid } from '@mui/material';
import backgroundImage from '@/assets/bg-welcome.svg';
import boxDownImage from '@/assets/box-wave-down.svg';
import boxUpImage from '@/assets/box-wave-up.svg';
import firstTeamMemberImage from '@/assets/team-member1.jpg';
import secondTeamMemberImage from '@/assets/team-member2.jpg';
import teamLeadImage from '@/assets/team-lead.jpg';
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
          sx={{
            width: '55%',
            margin: '0 auto',
            textAlign: 'center',
            padding: '3rem 0',
          }}
        >
          {t('welcomePage.description')}
        </Typography>
        <Button
          variant="contained"
          onClick={redirect}
          sx={{
            width: '30%',
            margin: '2rem 0',
          }}
        >
          {t('welcomePage.startButton')}
        </Button>
      </Box>
      <Box
        component="section"
        sx={{
          position: 'relative',
          zIndex: '3',
          padding: ' 12rem 0 20rem',
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
            position: 'absolute',
            top: '-21px',
            zIndex: '2',
          }}
        ></Box>

        <Typography variant="h2" color="primary" textAlign="center">
          {t('Advantages')}
        </Typography>
        <Grid
          container
          spacing={2}
          color="primary.contrastText"
          padding="2rem"
          display="flex"
          justifyContent="space-evenly"
        >
          <Grid
            item
            xs={5}
            sx={{
              background:
                'radial-gradient(97.45% 330.08% at 4.95% 10.11%, #929fc1 0%, rgba(0, 30, 106, 0.5) 100%)',
              borderRadius: '20px',
              alignItems: 'center',
              textAlign: 'center',
              margin: '2rem',
            }}
          >
            <Typography variant="h5" component="p" padding="2rem">
              {t('Ask for what you need, get exactly that')}
            </Typography>
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              background:
                'radial-gradient(97.45% 330.08% at 4.95% 10.11%, #929fc1 0%, rgba(0, 30, 106, 0.5) 100%)',
              borderRadius: '20px',
              alignItems: 'center',
              textAlign: 'center',
              margin: '2rem',
            }}
          >
            <Typography variant="h5" component="p" padding="2rem">
              {t('Get many resources in a single request')}
            </Typography>
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              background:
                'radial-gradient(97.45% 330.08% at 4.95% 10.11%, #929fc1 0%, rgba(0, 30, 106, 0.5) 100%)',
              borderRadius: '20px',
              alignItems: 'center',
              textAlign: 'center',
              margin: '2rem',
            }}
          >
            <Typography variant="h5" component="p" padding="2rem">
              {t('Move faster with powerful developer tools')}
            </Typography>
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              background:
                'radial-gradient(97.45% 330.08% at 4.95% 10.11%, #929fc1 0%, rgba(0, 30, 106, 0.5) 100%)',
              borderRadius: '20px',
              alignItems: 'center',
              textAlign: 'center',
              margin: '2rem',
            }}
          >
            <Typography variant="h5" component="p" padding="2rem">
              {t('Bring your own data and code')}
            </Typography>
          </Grid>
        </Grid>
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
      </Box>
      <Box
        component="section"
        sx={{
          backgroundColor: 'primary.light',
          position: 'relative',
        }}
      >
        <Box
          component="div"
          sx={{
            width: '100%',
            minHeight: '19rem',
            background: `url(${boxUpImage}) no-repeat`,
            backgroundSize: 'contain',
            position: 'absolute',
            top: '-26%',
            zIndex: '5',
          }}
        ></Box>
        <Typography variant="h2" color="primary" textAlign="center" position="relative" zIndex="6">
          {t('Our team')}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', padding: '3rem 0' }}>
          <Card sx={{ width: 300 }}>
            <CardMedia sx={{ height: 300 }} image={firstTeamMemberImage} title="Marina" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Marina
              </Typography>
              <Typography variant="body2" color="primary.dark">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industrys standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: 300 }}>
            <CardMedia sx={{ height: 300 }} image={teamLeadImage} title="Pavel" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pavel
              </Typography>
              <Typography variant="body2" color="primary.dark">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industrys standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: 300 }}>
            <CardMedia sx={{ height: 300 }} image={secondTeamMemberImage} title="Alesia" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Alesia
              </Typography>
              <Typography variant="body2" color="primary.dark">
                LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industrys standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export { WelcomePage };
