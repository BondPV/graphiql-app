import { Close } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

interface IDrawerProps {
  children: React.ReactNode;
  openDrawer: boolean;
  toggleDrawer: () => void;
}
const Drawer = ({ children, openDrawer, toggleDrawer }: IDrawerProps): JSX.Element => {
  return (
    <>
      {openDrawer && (
        <>
          <Box position={'absolute'} top={0} right={0} zIndex={1500}>
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
            width={'290px'}
            overflow={'auto'}
            whiteSpace={'normal'}
            bgcolor={'primary.light'}
            borderLeft={5}
            borderColor={'secondary.main'}
            zIndex={1400}
          >
            {children}
          </Box>
        </>
      )}
    </>
  );
};

export { Drawer };
