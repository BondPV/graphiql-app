import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import notFoundImg from '@/assets/not-found.svg';
import { COLORS, MAIN_CONTENT_HEIGHT } from '@/constants';

const CONTENT_HEIGHT = 'calc(100vh - 300px)';
const IMAGE_WRAP_HEIGHT = 'calc(100vh - 236px)';

const NotFoundPage = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const redirectToWelcomePage = (): void => {
    navigate('/');
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        justifyContent: { xs: 'center', md: 'space-evenly' },
        alignItems: 'center',
        minHeight: { xs: CONTENT_HEIGHT, sm: MAIN_CONTENT_HEIGHT },
        padding: { xs: '2rem 2rem 0', sm: '2rem' },
        color: COLORS.primaryDark,
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          minHeight: { xs: '30vh', md: IMAGE_WRAP_HEIGHT },
          background: `url(${notFoundImg}) no-repeat 50% 50%`,
          backgroundSize: 'contain',
        }}
      ></Box>
      <Box>
        <Typography variant="h2">{t('notFoundPage.title')}</Typography>
        <Typography variant="body1" component="p">
          {t('notFoundPage.subtitle')}
        </Typography>
        <Button
          onClick={redirectToWelcomePage}
          variant="contained"
          sx={{ width: '100%', margin: '2rem 0' }}
        >
          {t('notFoundPage.button')}
        </Button>
      </Box>
    </Container>
  );
};

export { NotFoundPage };
