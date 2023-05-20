import { useTranslation } from 'react-i18next';
import { Box, CircularProgress, Container, Stack } from '@mui/material';
import { MAIN_CONTENT_HEIGHT } from '@/constants';

const Fallback = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Container
      sx={{
        width: '100%',
        height: MAIN_CONTENT_HEIGHT,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack flexDirection={'row'} justifyContent={'center'} alignItems={'center'} gap={'10px'}>
        <CircularProgress />
        <Box>{t('somethingIsBroken')}</Box>
      </Stack>
    </Container>
  );
};

export { Fallback };
