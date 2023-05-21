import { useAuthState } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, CardMedia, Card, CardContent, Grid } from '@mui/material';
import backgroundImage from '@/assets/bg-welcome.svg';
import boxDownImage from '@/assets/box-wave-down.svg';
import boxUpImage from '@/assets/box-wave-up.svg';
import firstTeamMemberImage from '@/assets/team-member1.jpg';
import secondTeamMemberImage from '@/assets/team-member2.jpg';
import teamLeadImage from '@/assets/team-lead.jpg';
import { auth } from '@/Api/firebase';
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
          background: COLORS.gradient.dark,
        }}
      >
        <Box
          component="div"
          sx={{
            width: '100%',
            minHeight: { xs: '6rem', md: '13rem', xl: '17rem' },
            background: `url(${boxDownImage}) no-repeat`,
            backgroundSize: 'cover',
            position: 'relative',
            top: '-21px',
            zIndex: '5',
          }}
        ></Box>
        <Box>
          <Typography variant="h2" color="primary" textAlign="center">
            {t('welcomePage.subtitleAdvantages')}
          </Typography>
          <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 1, md: 12 }}
            color="primary.contrastText"
            padding="2rem 0 3rem"
            display="flex"
            justifyContent="space-evenly"
          >
            <Grid
              item
              xs={5}
              sx={{
                background: COLORS.gradient.gridItem,
                borderRadius: '20px',
                alignItems: 'center',
                textAlign: 'center',
                margin: '2rem',
              }}
            >
              <Typography variant="h5" component="p" padding="2rem">
                {t('welcomePage.advantageItemFirst')}
              </Typography>
            </Grid>
            <Grid
              item
              xs={5}
              sx={{
                background: COLORS.gradient.gridItem,
                borderRadius: '20px',
                alignItems: 'center',
                textAlign: 'center',
                margin: '2rem',
              }}
            >
              <Typography variant="h5" component="p" padding="2rem">
                {t('welcomePage.advantageItemSecond')}
              </Typography>
            </Grid>
            <Grid
              item
              xs={5}
              sx={{
                background: COLORS.gradient.gridItem,
                borderRadius: '20px',
                alignItems: 'center',
                textAlign: 'center',
                margin: '2rem',
              }}
            >
              <Typography variant="h5" component="p" padding="2rem">
                {t('welcomePage.advantageItemThird')}
              </Typography>
            </Grid>
            <Grid
              item
              xs={5}
              sx={{
                background: COLORS.gradient.gridItem,
                borderRadius: '20px',
                alignItems: 'center',
                textAlign: 'center',
                margin: '2rem',
              }}
            >
              <Typography variant="h5" component="p" padding="2rem">
                {t('welcomePage.advantageItemFourth')}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box>
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
                width: { xs: '80%', md: '50%' },
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
              minHeight: { xs: '6rem', md: '13rem', xl: '17rem' },
              background: `url(${boxUpImage}) no-repeat`,
              backgroundSize: 'cover',
              position: 'relative',
              bottom: '-2px',
              zIndex: '5',
            }}
          ></Box>
        </Box>
      </Box>
      <Box
        component="section"
        sx={{
          backgroundColor: 'primary.light',
          position: 'relative',
        }}
      >
        <Typography variant="h2" color="primary" textAlign="center" position="relative" zIndex="6">
          {t('welcomePage.team')}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'space-evenly' },
            alignItems: { xs: 'center', md: 'stretch' },
            padding: { xs: '2rem 0 0', md: '3rem 0' },
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Card sx={{ width: { xs: '80%', md: '30%' }, marginBottom: { xs: '2rem', md: '0' } }}>
            <CardMedia
              sx={{
                height: 300,
                backgroundPosition: { xs: '0 25%', md: '50% 30%' },
              }}
              image={firstTeamMemberImage}
              title="welcomePage.teamMemberFirst"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t('welcomePage.teamMemberFirst')}
              </Typography>
              <Typography variant="body1" color="primary.dark">
                {t('welcomePage.teamMemberFirstDescription')}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: { xs: '80%', md: '30%' }, marginBottom: { xs: '2rem', md: '0' } }}>
            <CardMedia
              sx={{
                height: 300,
                backgroundPosition: { xs: '0 40%', md: '50% 40%' },
              }}
              image={teamLeadImage}
              title={t('welcomePage.teamLead')}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t('welcomePage.teamLead')}
              </Typography>
              <Typography variant="body1" color="primary.dark">
                {t('welcomePage.teamLeadDescription')}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: { xs: '80%', md: '30%' }, marginBottom: { xs: '2rem', md: '0' } }}>
            <CardMedia
              sx={{
                height: 300,
                backgroundPosition: { xs: '0 25%', md: '50% 30%' },
              }}
              image={secondTeamMemberImage}
              title={t('welcomePage.teamMemberSecond')}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {t('welcomePage.teamMemberSecond')}
              </Typography>
              <Typography variant="body1" color="primary.dark">
                {t('welcomePage.teamMemberSecondDescription')}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export { WelcomePage };
