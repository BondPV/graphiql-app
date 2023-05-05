import { useTranslation } from 'react-i18next';
import { Container } from '@mui/material';

const WelcomePage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl">
      <div>
        <p>{t('welcomePage')}</p>
      </div>
    </Container>
  );
};

export { WelcomePage };
