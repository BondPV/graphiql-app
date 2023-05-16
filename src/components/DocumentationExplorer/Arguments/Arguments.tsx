import { COLORS } from '../../../constants/colors';
import { ISchemaArgs } from '../../../types';
import { ReturnType } from '../ReturnType';

interface IFieldsArgs {
  args?: ISchemaArgs[];
}

const Arguments = ({ args }: IFieldsArgs): JSX.Element => {
  return (
    <>
      {args && (
        <span aria-label="arguments">
          {args?.map((arg, index) => (
            <span key={arg.name}>
              <span>
                {index === 0 ? `(` : ''}
                {index > 0 ? ',' : ''}
                <span style={{ color: COLORS.doc.arguments }}> {arg.name}</span>
                {`: `}
                <ReturnType type={arg.type} />
                {arg.defaultValue ? `=${arg.defaultValue}` : ''}
              </span>
              <span>{arg.description}</span>
              {index === args.length - 1 ? `)` : ''}
            </span>
          ))}
        </span>
      )}
    </>
  );
};

export { Arguments };
