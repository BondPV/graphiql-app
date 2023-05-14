import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { requestToGraphQL } from '../../Api/requestsApi';
import { INTROSPECTION_QUERY } from '../../constants';
import { IRequestFetch } from '../../types';

interface ISchemaData {
  data: ISchema;
}

interface ISchema {
  __schema: {
    types: IType[];
  };
}

interface IType {
  name: string;
  kind: string;
  description: string;
  fields?: IField[];
}

interface IField {
  name: string;
  description: string;
  args?: IArg[];
  type: {
    name: string;
    kind: string;
  };
}

interface IArg {
  name: string;
  description: string;
  type: {
    name: string;
    kind: string;
  };
}

const DocumentationExplorer = (): JSX.Element => {
  const [schema, setSchema] = useState<null | ISchemaData>(null);

  useEffect(() => {
    const schemaRequest: IRequestFetch = {
      query: INTROSPECTION_QUERY,
      variables: {},
      headers: {},
    };

    async function fetchData(): Promise<void> {
      const responseData = await requestToGraphQL(schemaRequest);

      if (responseData instanceof Object && 'data' in responseData) {
        setSchema(responseData as ISchemaData);
      }
    }

    fetchData();
  }, []);

  if (!schema) {
    return <Box>Loading...</Box>;
  }

  // const data = schema.data.__schema.types.filter(
  //   (type) => type.fields && !type.name.includes('__')
  // );

  // const data = schema.data.__schema.types?.query

  const queryTypes = (name = 'Query'): IType[] => {
    const filteredQuery = schema.data?.__schema.types.filter(
      (type) => type.kind === 'OBJECT' && type.name.endsWith(name)
    );
    console.log(filteredQuery);

    return filteredQuery;
  };

  console.log(queryTypes);

  return (
    <Box>
      {queryTypes()?.map((type) => (
        <div key={type.name}>
          <h2>{type.name}</h2>
          <p>{type.description}</p>
          {type.fields && (
            <div>
              <h3>Fields:</h3>
              {type.fields.map((field) => (
                <div key={field.name}>
                  <h4>{field.name}</h4>
                  <p>{field.description}</p>
                  {field.args && (
                    <div>
                      <h5>Arguments:</h5>
                      {field.args.map((arg) => (
                        <div key={arg.name}>
                          <p>
                            {arg.name}: {arg.type.name}
                          </p>
                          <p>{arg.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <p>Returns: {field.type.kind === 'OBJECT' ? field.type.name : field.type.kind}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </Box>
  );
};

export { DocumentationExplorer };
