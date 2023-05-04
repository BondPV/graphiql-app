import { useTranslation } from 'react-i18next';
import { CodeEditor } from '../../components/CodeEditor';
import { Container } from '@mui/material';

const WelcomePage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl">
      <div>
        <p>{t('welcomePage')}</p>
        <CodeEditor />
      </div>
    </Container>
  );
};

export { WelcomePage };
