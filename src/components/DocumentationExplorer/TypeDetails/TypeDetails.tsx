import { ISchemaType } from '../../../types';

interface ITypeDetails {
  type: ISchemaType;
}

const TypeDetails = ({ type }: ITypeDetails): JSX.Element => {
  if (type.kind === 'OBJECT') {
    return <>{type.name}</>;
  }

  if (type.kind === 'SCALAR') {
    return <>{type.name}</>;
  }

  if (type.kind === 'NON_NULL') {
    if (type.ofType?.kind === 'SCALAR') {
      return <>{type.ofType?.name}!</>;
    }

    if (type.ofType?.kind === 'OBJECT') {
      return <>{type.ofType?.name}</>;
    }

    return <>[{type.ofType?.ofType?.ofType?.name}]!</>;
  }

  return <>Empty</>;
};

export { TypeDetails };
