import { Box } from '@mui/material';
import { ISchemaType } from '../../../types';
import { Arguments } from '../Arguments';
import { ReturnType } from '../ReturnType';

interface ITypesList {
  type: ISchemaType;
}

const TypesList = ({ type }: ITypesList): JSX.Element => {
  const typeFields = type.fields ?? type.inputFields;

  return (
    <Box>
      {typeFields && (
        <div>
          <h3>Fields:</h3>
          {typeFields?.map((field) => (
            <div key={field.name} style={{ marginBottom: '1rem' }}>
              <span style={{ color: 'blue' }}>{field.name}</span>
              {field.args && <Arguments args={field.args} />}
              {`: `}
              <span aria-label="returnsType" style={{ color: 'orange' }}>
                <ReturnType type={field.type} />
              </span>
            </div>
          ))}
        </div>
      )}
    </Box>
  );
};

export { TypesList };
