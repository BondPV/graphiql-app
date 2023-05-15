import { ISchemaType } from '../../../types';

interface ITypeDetails {
  type: ISchemaType;
}

const TypeDetails = ({ type }: ITypeDetails): JSX.Element => {
  const getTypeDetails = (type: ISchemaType): string => {
    if (type.kind === 'OBJECT' || type.kind === 'SCALAR') {
      return type.name;
    }

    if (type.kind === 'NON_NULL') {
      return `${getTypeDetails(type.ofType!)}!`;
    }

    if (type.kind === 'LIST') {
      return `[${getTypeDetails(type.ofType!)}]`;
    }

    return '';
  };

  return <>{getTypeDetails(type)}</>;
};

export { TypeDetails };
