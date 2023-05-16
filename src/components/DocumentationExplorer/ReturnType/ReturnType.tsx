import { useAppDispatch } from '../../../hooks/redux';
import { setSchemaQuery } from '../../../redux/slice';
import { ISchemaOfType } from '../../../types';

interface IReturnType {
  type: ISchemaOfType;
}

const ReturnType = ({ type }: IReturnType): JSX.Element => {
  const dispatch = useAppDispatch();

  let typeValue = '';

  const getReturnsType = (type: ISchemaOfType): string => {
    if (type.kind === 'OBJECT' || type.kind === 'SCALAR' || type.kind === 'INPUT_OBJECT') {
      typeValue = type.name;
      return type.name;
    }

    if (type.kind === 'NON_NULL') {
      return `${getReturnsType(type.ofType!)}!`;
    }

    if (type.kind === 'LIST') {
      return `[${getReturnsType(type.ofType!)}]`;
    }

    return '';
  };

  const handleClick = (value: string): void => {
    dispatch(setSchemaQuery(value));
  };

  return (
    <span
      aria-label="returnsType"
      style={{ color: 'orange' }}
      onClick={(): void => {
        handleClick(typeValue);
      }}
    >
      {getReturnsType(type)}
    </span>
  );
};

export { ReturnType };
