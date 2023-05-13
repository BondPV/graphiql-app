import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pending } from '@mui/icons-material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { IconButton, Tooltip } from '@mui/material';
import { requestToGraphQL } from '@/Api/requestsApi';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setResponse } from '@/redux/slice/editorResponseSlice';
import { IRequestFetch } from '@/types';

const ButtonExecute = (): JSX.Element => {
  const [isLoading, setLoading] = useState(false);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const editorRequest = useAppSelector((state) => state.editorRequest);

  const handleClick = async (): Promise<void> => {
    setLoading(true);
    const request: IRequestFetch = {
      query: editorRequest.query,
      variables: editorRequest.variables ? JSON.parse(editorRequest.variables) : {},
      headers: editorRequest.headers ? JSON.parse(editorRequest.headers) : {},
    };

    const value = await requestToGraphQL(request);
    dispatch(setResponse(value));
    setLoading(false);
  };

  let button = <ArrowCircleRightIcon sx={{ fontSize: '60px' }} />;

  if (isLoading) {
    button = <Pending sx={{ fontSize: '60px', color: 'primary.main' }} />;
  }

  return (
    <Tooltip title={t('ExecuteQuery')} placement="top">
      <IconButton
        color="secondary"
        sx={{
          zIndex: 100,
        }}
        onClick={handleClick}
        disabled={isLoading}
      >
        {button}
      </IconButton>
    </Tooltip>
  );
};

export { ButtonExecute };
