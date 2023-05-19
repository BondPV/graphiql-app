import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pending } from '@mui/icons-material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { IconButton, Tooltip } from '@mui/material';
import { requestToGraphQL } from '@/Api/requestsApi';
import { ERROR_MESSAGE } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setAlertMsg } from '@/redux/slice';
import { setResponse } from '@/redux/slice/editorResponseSlice';
import { IRequestFetch } from '@/types';

const ButtonExecute = (): JSX.Element => {
  const [isLoading, setLoading] = useState(false);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const editorRequest = useAppSelector((state) => state.editorRequest);

  const handleClick = async (): Promise<void> => {
    let responseValue: string | object = '';
    setLoading(true);

    try {
      const request: IRequestFetch = {
        query: editorRequest.query,
        variables: editorRequest.variables ? JSON.parse(editorRequest.variables) : {},
        headers: editorRequest.headers ? JSON.parse(editorRequest.headers) : {},
      };

      responseValue = await requestToGraphQL(request);
    } catch (error: unknown) {
      if (error instanceof Error) {
        responseValue = `Error: ${error.message}`;
      } else {
        responseValue = 'Error: something went wrong';
      }
    }

    dispatch(setResponse(responseValue));

    if (typeof responseValue === 'string' && responseValue.includes('Error')) {
      dispatch(setAlertMsg({ message: ERROR_MESSAGE(t).requestFailed }));
    }

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
