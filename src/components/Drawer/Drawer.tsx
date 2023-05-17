import { Close } from '@mui/icons-material';
import { Box, Fade, IconButton } from '@mui/material';

interface IDrawerProps {
  children: React.ReactNode;
  openDrawer: boolean;
  toggleDrawer: () => void;
}

const Drawer = ({ children, openDrawer, toggleDrawer }: IDrawerProps): JSX.Element => {
  return (
    <>
      <Fade in={openDrawer} timeout={150}>
        <Box>
          <Box position={'absolute'} top={5} right={5} zIndex={1300}>
            <IconButton aria-label="close" onClick={toggleDrawer}>
              <Close />
            </IconButton>
          </Box>
          <Box
            position={'absolute'}
            padding={1}
            top={0}
            right={0}
            height={'100%'}
            width={'340px'}
            overflow={'auto'}
            whiteSpace={'normal'}
            bgcolor={'primary.light'}
            borderLeft={3}
            borderColor={'primary.main'}
            zIndex={1200}
          >
            {children}
          </Box>
        </Box>
      </Fade>
    </>
  );
};

export { Drawer };
