import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DescriptionIcon from '@mui/icons-material/Description';
import { IconButton, Tooltip } from '@mui/material';
import { requestToGraphQL } from '@/Api/requestsApi';
import { INTROSPECTION_QUERY } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setSchema } from '@/redux/slice';
import { IDocumentationSchema, IRequestFetch } from '@/types';

interface IButtonProps {
  toggleDrawer: () => void;
}

const ButtonSchema = ({ toggleDrawer }: IButtonProps): JSX.Element => {
  const schema = useAppSelector((state) => state.schemaQueryType).schema;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleClickGetSchema = async (): Promise<void> => {
    toggleDrawer();
  };

  useEffect(() => {
    const schemaRequest: IRequestFetch = {
      query: INTROSPECTION_QUERY,
      variables: {},
      headers: {},
    };

    async function fetchData(): Promise<void> {
      const responseData = await requestToGraphQL(schemaRequest);

      if (responseData instanceof Object && 'data' in responseData) {
        dispatch(setSchema(responseData as IDocumentationSchema));
      }
    }

    fetchData();
  }, [dispatch]);

  if (!schema) {
    return (
      <Tooltip title={t('notDocumentation')} placement="bottom">
        <IconButton>
          <DescriptionIcon sx={{ fontSize: '30px', cursor: 'not-allowed', opacity: '0.4' }} />
        </IconButton>
      </Tooltip>
    );
  } else {
    return (
      <Tooltip title={t('documentation')} placement="bottom">
        <IconButton onClick={handleClickGetSchema}>
          <DescriptionIcon sx={{ fontSize: '30px' }} />
        </IconButton>
      </Tooltip>
    );
  }
};

export { ButtonSchema };
