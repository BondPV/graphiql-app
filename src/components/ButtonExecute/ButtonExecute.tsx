import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { responseToGraphQL } from '../../Api/Api';
import { setResponse } from '../../redux/slice/editorResponseSlice';

const ButtonExecute = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const editorRequest = useAppSelector((state) => state.editorRequest).query;

  const handleClick = async (): Promise<void> => {
    const value = await responseToGraphQL(editorRequest);
    dispatch(setResponse(value));
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
