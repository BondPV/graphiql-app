import { ISchemaType } from '../../../types';

interface IQueryTypesList {
  types: ISchemaType[];
}

const QueryTypesList = ({ types }: IQueryTypesList): JSX.Element => (
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
                <span style={{ color: 'blue' }}>{field.name}</span> {`(`}
                {field.args && (
                  <span aria-label="arguments">
                    {field.args?.map((arg) => (
                      <span key={arg.name}>
                        <span>
                          <span style={{ color: 'red' }}> {arg.name}</span>
                          <span style={{ color: 'green' }}>
                            : {arg.type.name}
                            {arg.type.kind === 'NON_NULL' ? `${arg.type.ofType.name}!` : ''}{' '}
                          </span>
                          {arg.defaultValue ? `=${arg.defaultValue}` : ''}
                        </span>
                        <span>{arg.description}</span>
                      </span>
                    ))}
                  </span>
                )}
                {`) : `}
                <span aria-label="returns" style={{ color: 'orange' }}>
                  {field.type.kind === 'OBJECT' ? field.type.name : `[${field.name.slice(0, -1)}]!`}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
  </>
);

export { QueryTypesList };
