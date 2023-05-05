import { useTranslation } from 'react-i18next';
import { CodeEditor } from '../../components/CodeEditor';
import { Box, Container, Paper } from '@mui/material';

const MainPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl">
      <Paper
        elevation={2}
        sx={{
          mt: 2,
          p: 1,
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
        }}
      >
        <p>{t('mainPage')}</p>
        <CodeEditor />
      </Paper>
    </Container>
  );
};

export { MainPage };
