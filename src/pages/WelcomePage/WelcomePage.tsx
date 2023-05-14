import { useAuthState } from 'react-firebase-hooks/auth';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { auth } from '@/Api/firebase';
import { ROUTE } from '@/constants';

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
    <Container maxWidth="xl">
      <div>
        <p>{t('welcomePage')}</p>
        <button onClick={redirect}>{t('startButton')}</button>
      </div>
    </Container>
  );
};

export { WelcomePage };
