import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { requestToGraphQL } from '../../Api/requestsApi';
import { INTROSPECTION_QUERY } from '../../constants';
import { IDocumentationSchema, IRequestFetch, ISchemaType } from '../../types';
import { QueryTypesList } from './QueryTypesList';

const DocumentationExplorer = (): JSX.Element => {
  const [schema, setSchema] = useState<null | IDocumentationSchema>(null);

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

  const queryTypes: ISchemaType[] = schema.data?.__schema.types.filter(
    (type) => type.kind === 'OBJECT' && type.name.endsWith('Query')
  );

  return (
    <Box>
      <QueryTypesList types={queryTypes} />
    </Box>
  );
};

export { DocumentationExplorer };
