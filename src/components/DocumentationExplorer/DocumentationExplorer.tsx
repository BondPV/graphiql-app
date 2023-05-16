import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { requestToGraphQL } from '../../Api/requestsApi';
import { INTROSPECTION_QUERY } from '../../constants';
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

  return (
    <Box>
      {queryTypes.map((type) => (
        <div key={type.name} style={{ fontSize: '16px' }}>
          <p onClick={handleClick}>{previousQueryType}</p>
          <h2>{type.name}</h2>
          <p>{type.description}</p>
          <TypesList type={type} />
        </div>
      ))}
    </Box>
  );
};

export { DocumentationExplorer };
