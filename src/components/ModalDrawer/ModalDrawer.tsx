import { Box, Modal } from '@mui/material';

interface IModalDrawerProps {
  children: React.ReactNode;
  openDrawer: boolean;
  toggleDrawer: () => void;
}

const ModalDrawer = ({ children, openDrawer, toggleDrawer }: IModalDrawerProps): JSX.Element => {
  return (
    <div>
      <Modal open={openDrawer} onClose={toggleDrawer} sx={{ display: { xs: 'block', md: 'none' } }}>
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
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export { ModalDrawer };
