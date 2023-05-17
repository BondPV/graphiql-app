import { lazy, Suspense } from 'react';
import { Close } from '@mui/icons-material';
import { Box, CircularProgress, Fade, IconButton, Modal } from '@mui/material';

const DocumentationExplorer = lazy(() => import('@/components/DocumentationExplorer'));

interface IDrawerProps {
  openDrawer: boolean;
  toggleDrawer: () => void;
  mode: 'fixed' | 'relative';
}

const DocsDrawer = ({ openDrawer, toggleDrawer, mode }: IDrawerProps): JSX.Element => {
  const closeIcon = (
    <IconButton aria-label="close" onClick={toggleDrawer}>
      <Close />
    </IconButton>
  );

  const docsContent = (
    <Suspense fallback={<CircularProgress />}>
      <DocumentationExplorer />
    </Suspense>
  );

  return (
    <>
      {mode === 'relative' && (
        <Box
          aria-label="docsDesktop"
          position={'relative'}
          sx={{ display: { xs: 'none', lg: 'block' } }}
        >
          <Box position={'absolute'} top={20} right={5} zIndex={1300}>
            {closeIcon}
          </Box>
          <Box
            my={3}
            mx={1}
            padding={1}
            height={'100%'}
            width={'330px'}
            overflow={'auto'}
            whiteSpace={'normal'}
            bgcolor={'primary.light'}
          >
            {docsContent}
          </Box>
        </Box>
      )}
      {mode === 'fixed' && (
        <Box
          aria-label="docsTablet"
          sx={{
            display: { xs: 'none', sm: 'block', lg: 'none' },
          }}
        >
          <Fade in={openDrawer} timeout={150}>
            <Box>
              <Box position={'absolute'} top={5} right={5} zIndex={1300}>
                {closeIcon}
              </Box>
              <Box
                position={'absolute'}
                padding={1}
                top={0}
                right={0}
                height={'100%'}
                width={'330px'}
                overflow={'auto'}
                whiteSpace={'normal'}
                bgcolor={'primary.light'}
                borderLeft={3}
                borderColor={'primary.main'}
                zIndex={1200}
              >
                {docsContent}
              </Box>
            </Box>
          </Fade>
        </Box>
      )}
      {mode === 'fixed' && (
        <Box aria-label="docsMobile" sx={{ display: { xs: 'block', sm: 'none' } }}>
          <Modal
            open={openDrawer}
            onClose={toggleDrawer}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: '95%', sm: '70%' },
                height: '80vh',
                overflow: 'auto',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 2,
              }}
            >
              <Box position={'absolute'} top={5} right={5} zIndex={1300}>
                {closeIcon}
              </Box>
              {docsContent}
            </Box>
          </Modal>
        </Box>
      )}
    </>
  );
};

export { DocsDrawer };
