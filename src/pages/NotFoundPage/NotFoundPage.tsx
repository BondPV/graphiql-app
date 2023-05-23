import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import notFoundImg from '@/assets/not-found1.svg';
import { COLORS } from '@/constants';

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
        minHeight: { xs: 'calc(100vh - 304px)', sm: 'calc(100vh - 236px)' },
        padding: { xs: '2 rem 2 rem 0', sm: '2rem' },
        color: COLORS.primaryDark,
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          minHeight: { xs: '610px', md: 'calc(100vh - 236px)' },
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
