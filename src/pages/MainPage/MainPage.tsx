import { Box, Container, Paper, Stack } from '@mui/material';
import { ButtonExecute } from '../../components/ButtonExecute';
import { ButtonSchema } from '../../components/ButtonSchema';
import { CodeEditor } from '../../components/CodeEditor';
import { ResponseViewer } from '../../components/ResponseViewer';

const MainPage = (): JSX.Element => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          mt: 2,
          p: 1,
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            p: 1,
            borderRadius: '20px',
          }}
        >
          <Paper
            elevation={4}
            sx={{
              display: 'flex',
              p: 2,
              width: '50%',
              borderRadius: '20px',
            }}
          >
            <Box
              sx={{
                flexGrow: '1',
                mr: 1,
              }}
            >
              <CodeEditor />
            </Box>
            <Stack gap={2} alignItems={'center'}>
              <ButtonExecute />
              <ButtonSchema />
            </Stack>
          </Paper>
          <Box
            sx={{
              width: '50%',
            }}
          >
            <ResponseViewer />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export { MainPage };
