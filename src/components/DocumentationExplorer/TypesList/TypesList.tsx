import { ISchemaType } from '../../../types';
import { Arguments } from '../Arguments';
import { TypeDetails } from '../TypeDetails';

interface ITypesList {
  types: ISchemaType[];
}

const TypesList = ({ types }: ITypesList): JSX.Element => (
  <>
    {types.map((type) => (
      <div key={type.name} style={{ fontSize: '16px' }}>
        <h2>{type.name}</h2>
        <p>{type.description}</p>
        {type.fields && (
          <div>
            <h3>Fields:</h3>
            {type.fields?.map((field) => (
              <div key={field.name} style={{ marginBottom: '1rem' }}>
                <span style={{ color: 'blue' }}>{field.name}</span>
                <Arguments args={field.args} />
                {`: `}
                <span aria-label="returnsType" style={{ color: 'orange' }}>
                  <TypeDetails type={field.type} />
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
  </>
);

export { TypesList };
