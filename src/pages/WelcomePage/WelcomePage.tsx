import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../App';
import { useContext } from 'react';
import { PATCH } from '../../constants';
import { Container } from '@mui/material';

const WelcomePage = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isAuth = useContext(AuthContext);

  const redirect = (): void => {
    if (isAuth) {
      navigate(PATCH.mainPage);
    } else {
      navigate(PATCH.signInPage);
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
