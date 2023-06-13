import { lazy, Suspense } from 'react';
import { Close } from '@mui/icons-material';
import { Box, Fade, IconButton, Modal } from '@mui/material';
import { Preloader } from '../Preloader';

const DocumentationExplorer = lazy(() => import('@/components/DocumentationExplorer'));

interface IDrawerProps {
  openDrawer: boolean;
  toggleDrawer: () => void;
}

const DocsDrawer = ({ openDrawer, toggleDrawer }: IDrawerProps): JSX.Element => {
  const closeIcon = (
    <Box position={'absolute'} top={'8px'} right={'8px'} zIndex={1300}>
      <IconButton aria-label="close" onClick={toggleDrawer}>
        <Close />
      </IconButton>
    </Box>
  );

  const docsContent = (
    <Suspense fallback={<Preloader height={'100%'} size={50} />}>
      <DocumentationExplorer />
    </Suspense>
  );

  return (
    <>
      <Box data-size="desktop" position={'relative'} sx={{ display: { xs: 'none', lg: 'block' } }}>
        {closeIcon}
        <Box
          py={1}
          px={2}
          height={'100%'}
          width={'330px'}
          overflow={'auto'}
          whiteSpace={'normal'}
          bgcolor={'primary.light'}
        >
          {docsContent}
        </Box>
      </Box>
      <Box
        data-size="tablet"
        position={'relative'}
        sx={{
          display: { xs: 'none', md: 'block', lg: 'none' },
        }}
      >
        <Fade in={openDrawer} timeout={200}>
          <Box>
            {closeIcon}
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
      <Box data-size="mobile" sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Modal
          open={openDrawer}
          onClose={toggleDrawer}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <Box
            sx={{
              position: 'absolute',
              p: 2,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: '95%', sm: '70%' },
              height: '80vh',
              overflow: 'auto',
              bgcolor: 'background.paper',
              boxShadow: 24,
            }}
          >
            {closeIcon}
            {docsContent}
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export { DocsDrawer };
