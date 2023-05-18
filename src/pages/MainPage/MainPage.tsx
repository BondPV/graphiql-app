import { useState } from 'react';
import { Box, Container, Paper, Stack } from '@mui/material';
import { ButtonExecute } from '@/components/ButtonExecute';
import { ButtonSchema } from '@/components/ButtonSchema';
import { CodeEditor } from '@/components/CodeEditor';
import { DocsDrawer } from '@/components/DocsDrawer';
import { ResponseViewer } from '@/components/ResponseViewer';
import { COLORS, MAIN_CONTENT_HEIGHT } from '@/constants';

const MainPage = (): JSX.Element => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (): void => setIsDrawerOpen(!isDrawerOpen);

  return (
    <Container maxWidth="xl" sx={{ paddingLeft: { xs: 0, sm: 3 }, paddingRight: { xs: 0, sm: 3 } }}>
      <Stack
        mt={2}
        direction={'row'}
        justifyContent={'space-between'}
        sx={{ height: { xs: 'auto', mt: 2, md: MAIN_CONTENT_HEIGHT } }}
      >
        <Box
          position={'relative'}
          sx={{
            flex: '1 1 auto',
            height: '100%',
            p: 1,
            backgroundColor: COLORS.background,
            borderRadius: { xs: 0, sm: '20px' },
          }}
        >
          <Stack
            gap={2}
            height={'100%'}
            direction={{ xs: 'column', md: 'row' }}
            sx={{
              p: { xs: 0.5, sm: 1 },
              borderRadius: '20px',
            }}
          >
            <Paper
              elevation={4}
              sx={{
                display: 'flex',
                p: { xs: 1, md: 2 },
                flex: '1 1 50%',
                borderRadius: { xs: 0, sm: '20px', md: 2 },
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <Box mr={1} width={'100%'}>
                <CodeEditor />
              </Box>
              <Stack
                gap={2}
                alignItems={'center'}
                justifyContent={{ xs: 'center', sm: 'flex-start' }}
                direction={{ xs: 'row', sm: 'column' }}
              >
                <ButtonExecute />
                <ButtonSchema toggleDrawer={toggleDrawer} />
              </Stack>
            </Paper>
            <Box
              sx={{
                flex: '1 1 50%',
              }}
            >
              <ResponseViewer />
            </Box>
          </Stack>
        </Box>
        {isDrawerOpen && <DocsDrawer openDrawer={isDrawerOpen} toggleDrawer={toggleDrawer} />}
      </Stack>
    </Container>
  );
};

export { MainPage };
