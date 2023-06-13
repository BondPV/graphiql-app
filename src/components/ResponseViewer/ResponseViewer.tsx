import { useTranslation } from 'react-i18next';
import JsonView from 'react18-json-view';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import { COLORS } from '@/constants';
import { useAppSelector } from '@/hooks/redux';
import '@/theme/styleViewer.css';

const ResponseViewer = (): JSX.Element => {
  const editorResponseValue = useAppSelector((state) => state.editorResponse).value;
  const { t } = useTranslation();

  let content: React.ReactNode = (
    <Box m={2} color={COLORS.primaryMain}>
      {t('responsePlaceholder')}
    </Box>
  );

  if (editorResponseValue) {
    content = <JsonView src={editorResponseValue} />;
  }

  return (
    <Box
      sx={{
        padding: 1,
        maxHeight: { xs: '50vh', md: '100%' },
        backgroundColor: { xs: grey.A200, sm: 'inherit' },
        fontSize: { xs: '0.9rem', md: '1rem', lg: '1.1rem' },
        overflow: 'auto',
      }}
    >
      {content}
    </Box>
  );
};

export { ResponseViewer };
