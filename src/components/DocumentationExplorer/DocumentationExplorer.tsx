import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { requestToGraphQL } from '@/Api/requestsApi';
import { DOC_INITIAL_VALUE, INTROSPECTION_QUERY } from '@/constants';
import { COLORS } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setSchema, setSchemaPreviousQuery } from '@/redux/slice';
import { IDocumentationSchema, IRequestFetch, ISchemaType } from '@/types';
import { Preloader } from '../Preloader';
import { TypesList } from './TypesList';

const DocumentationExplorer = (): JSX.Element => {
  const schema = useAppSelector((state) => state.schemaQueryType).schema;
  const queryType = useAppSelector((state) => state.schemaQueryType).value;
  const previousQueryType = useAppSelector((state) => state.schemaQueryType).previousValue;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

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
    return <Preloader height={'100%'} size={50} />;
  }

  const queryTypes: ISchemaType[] = schema.data?.__schema.types.filter((type) =>
    type.name.endsWith(queryType)
  );

  const handleClick = (): void => {
    dispatch(setSchemaPreviousQuery());
  };

  let docsHeader: React.ReactNode = (
    <Box>
      <Stack direction={'row'} alignItems={'center'}>
        <ArrowLeftIcon />
        <Typography
          component="span"
          variant="body2"
          onClick={handleClick}
          sx={{
            cursor: 'pointer',
            '&:hover': {
              color: COLORS.doc.fieldName,
            },
          }}
        >
          {previousQueryType}
        </Typography>
      </Stack>
      <Divider sx={{ width: '70%' }} />
    </Box>
  );

  let title: React.ReactNode = null;

  if (queryType === DOC_INITIAL_VALUE) {
    docsHeader = null;

    title = (
      <Box>
        <Typography component="h2" variant="h6" mt={1}>
          {t('Documentation')}
        </Typography>
        <Typography component="p" variant="body2" mt={1}>
          {t('DocsDescription')}
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      {title}
      {docsHeader}
      {queryTypes.map((type) => (
        <Box key={type.name} sx={{ fontSize: '1rem' }}>
          <Typography component="h3" variant="h6" mt={1}>
            {type.name}
          </Typography>
          <Typography component="p" variant="body2" mt={1}>
            {type.description}
          </Typography>
          <TypesList type={type} />
        </Box>
      ))}
    </Box>
  );
};

export default DocumentationExplorer;
