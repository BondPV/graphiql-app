import { useEffect, useState } from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { requestToGraphQL } from '../../Api/requestsApi';
import { DOC_INITIAL_VALUE, INTROSPECTION_QUERY } from '../../constants';
import { COLORS } from '../../constants/colors';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setSchemaPreviousQuery } from '../../redux/slice';
import { IDocumentationSchema, IRequestFetch, ISchemaType } from '../../types';
import { TypesList } from './TypesList';

const DocumentationExplorer = (): JSX.Element => {
  const [schema, setSchema] = useState<null | IDocumentationSchema>(null);
  const queryType = useAppSelector((state) => state.schemaQueryType).value;
  const previousQueryType = useAppSelector((state) => state.schemaQueryType).previousValue;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const schemaRequest: IRequestFetch = {
      query: INTROSPECTION_QUERY,
      variables: {},
      headers: {},
    };

    async function fetchData(): Promise<void> {
      const responseData = await requestToGraphQL(schemaRequest);

      if (responseData instanceof Object && 'data' in responseData) {
        setSchema(responseData as IDocumentationSchema);
      }
    }

    fetchData();
  }, []);

  if (!schema) {
    return <Box>Loading...</Box>;
  }

  const queryTypes: ISchemaType[] = schema.data?.__schema.types.filter((type) =>
    type.name.endsWith(queryType)
  );

  const handleClick = (): void => {
    dispatch(setSchemaPreviousQuery());
  };

  let title: React.ReactNode = (
    <>
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
    </>
  );

  if (queryType === DOC_INITIAL_VALUE) {
    title = null;
  }

  return (
    <Box>
      {queryTypes.map((type) => (
        <Box key={type.name} style={{ fontSize: '16px' }}>
          {title}
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

export { DocumentationExplorer };
