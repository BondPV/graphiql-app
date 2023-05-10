import DescriptionIcon from '@mui/icons-material/Description';
import { IconButton, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { responseToGraphQL } from '../../Api';

const ButtonSchema = (): JSX.Element => {
  const { t } = useTranslation();

  const schemaRequest = `query {
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

  const handleClickGetSchema = async (): Promise<void> => {
    const value = await responseToGraphQL(schemaRequest);
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
