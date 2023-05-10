import { IconButton, Tooltip } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { responseToGraphQL } from '../../Api/Api';
import { setResponse } from '../../redux/slice/editorResponseSlice';
import { useTranslation } from 'react-i18next';

const ButtonExecute = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const editorRequest = useAppSelector((state) => state.editorRequest);

  const handleClick = async (): Promise<void> => {
    const value = await responseToGraphQL(editorRequest);
    dispatch(setResponse(value));
  };

  return (
    <Tooltip title={t('ExecuteQuery')} placement="top">
      <IconButton
        color="secondary"
        sx={{
          zIndex: 100,
        }}
        onClick={handleClick}
      >
        <ArrowCircleRightIcon sx={{ fontSize: '60px' }} />
      </IconButton>
    </Tooltip>
  );
};

export { ButtonExecute };
