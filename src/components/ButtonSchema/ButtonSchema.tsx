import { useTranslation } from 'react-i18next';
import DescriptionIcon from '@mui/icons-material/Description';
import { IconButton, Tooltip } from '@mui/material';
import { requestToGraphQL } from '@/Api/requestsApi';
import { IRequestFetch } from '@/types';

const ButtonSchema = (): JSX.Element => {
  const { t } = useTranslation();

  const schemaQuery = `query {
    __schema {
      types {
        name
        kind
        description
        fields {
          name
          description
          type {
            name
            kind
          }
        }
      }
    }
  }`;

  const schemaRequest: IRequestFetch = {
    query: schemaQuery,
    variables: {},
    headers: {},
  };

  const handleClickGetSchema = async (): Promise<void> => {
    const value = await requestToGraphQL(schemaRequest);

    // TODO value processing
    console.log(value);
  };

  return (
    <Tooltip title={t('Documentation')} placement="bottom">
      <IconButton onClick={handleClickGetSchema}>
        <DescriptionIcon sx={{ fontSize: '30px' }} />
      </IconButton>
    </Tooltip>
  );
};

export { ButtonSchema };
