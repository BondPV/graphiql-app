import { Typography } from '@mui/material';
import { COLORS } from '@/constants';
import { useAppDispatch } from '@/hooks/redux';
import { setSchemaQuery } from '@/redux/slice';
import { ISchemaOfType } from '@/types';

interface IReturnType {
  type: ISchemaOfType;
}

const ReturnType = ({ type }: IReturnType): JSX.Element => {
  const dispatch = useAppDispatch();

  let typeValue = '';

  const getReturnsType = (type: ISchemaOfType): string => {
    switch (type.kind) {
      case 'OBJECT':
      case 'SCALAR':
      case 'INPUT_OBJECT':
        typeValue = type.name;
        return type.name;
      case 'NON_NULL':
        return `${getReturnsType(type.ofType!)}!`;
      case 'LIST':
        return `[${getReturnsType(type.ofType!)}]`;
      default:
        return '';
    }
  };

  const handleClick = (value: string): void => {
    dispatch(setSchemaQuery(value));
  };

  return (
    <Typography
      variant="body2"
      component="span"
      aria-label="returnsType"
      sx={{
        color: COLORS.doc.returnType,
        cursor: 'pointer',
        '&:hover': {
          textDecoration: 'underline',
        },
      }}
      onClick={(): void => {
        handleClick(typeValue);
      }}
    >
      {getReturnsType(type)}
    </Typography>
  );
};

export { ReturnType };
