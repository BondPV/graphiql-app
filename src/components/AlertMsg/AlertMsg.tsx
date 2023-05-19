import { useEffect, useState } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { clearAlertMsg } from '@/redux/slice';

const AlertMsg = (): JSX.Element => {
  const alertMessage = useAppSelector((state) => state.alertMsg.message);
  const alertSeverity = useAppSelector((state) => state.alertMsg.severity);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (alertMessage) {
      setOpen(true);
    }
  }, [alertMessage]);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleExited = (): void => {
    dispatch(clearAlertMsg());
  };

  return (
    <Snackbar
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      open={open}
      autoHideDuration={1500}
      onClose={handleClose}
      TransitionProps={{
        onExited: handleExited,
      }}
      sx={{
        marginBottom: 10,
      }}
    >
      <Alert
        onClose={handleClose}
        variant="filled"
        severity={alertSeverity || 'error'}
        sx={{ width: '100%' }}
      >
        {alertMessage}
      </Alert>
    </Snackbar>
  );
};

export { AlertMsg };
