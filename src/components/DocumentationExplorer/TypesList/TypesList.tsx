import ListAltIcon from '@mui/icons-material/ListAlt';
import { Box, Stack, Typography } from '@mui/material';
import { COLORS } from '@/constants';
import { ISchemaType } from '@/types';
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
          <Stack direction={'row'} marginBottom={2} alignItems={'center'} gap={'5px'}>
            <ListAltIcon sx={{ fontSize: '1rem' }} />
            <Typography variant="body2" component="h3" lineHeight={1}>
              Fields:
            </Typography>
          </Stack>
          {typeFields?.map((field) => (
            <Box key={field.name} sx={{ marginBottom: 1 }}>
              <span style={{ color: COLORS.doc.fieldName }}>{field.name}</span>
              {field.args && <Arguments args={field.args} />}
              {`: `}
              <ReturnType type={field.type} />
            </Box>
          ))}
        </div>
      )}
    </Box>
  );
};

export { TypesList };
