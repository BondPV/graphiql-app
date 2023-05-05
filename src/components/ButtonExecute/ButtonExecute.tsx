import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ButtonExecute = (): JSX.Element => {
  const handleClick = (): void => {
    console.log('click');
  };

  return (
    <Button
      variant="contained"
      sx={{
        zIndex: 100,
      }}
      onClick={handleClick}
    >
      <ArrowForwardIcon />
    </Button>
  );
};

export { ButtonExecute };
