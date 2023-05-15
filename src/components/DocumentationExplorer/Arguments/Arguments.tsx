import { ISchemaArgs } from '../../../types';

interface IFieldsArgs {
  args?: ISchemaArgs[];
}

const Arguments = ({ args }: IFieldsArgs): JSX.Element => (
  <>
    {args && (
      <span aria-label="arguments">
        {args?.map((arg) => (
          <>
            {`(`}
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
            {`)`}
          </>
        ))}
      </span>
    )}
  </>
);

export { Arguments };
