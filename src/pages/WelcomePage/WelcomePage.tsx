import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import backgroundImage from '@/assets/bg-welcome.svg';
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
    <Container
      maxWidth="xl"
      sx={{
        background: 'linear-gradient(222.57deg, #FFFFFF -5.18%, #EBEEF3 24.79%, #DADEEA 71.54%)',
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '55% -33rem',
          minHeight: '100rem',
        }}
      >
        <p>{t('welcomePage')}</p>
        <button onClick={redirect}>{t('startButton')}</button>
      </Box>
    </Container>
  );
};

export { WelcomePage };
