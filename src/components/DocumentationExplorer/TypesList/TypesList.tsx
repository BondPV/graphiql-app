import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { Box, Stack, Typography } from '@mui/material';
import { COLORS } from '../../../constants/colors';
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
          <Stack direction={'row'} marginBottom={1} alignItems={'center'}>
            <PlaylistPlayIcon fontSize={'small'} />
            <Typography variant="body2" component="h3">
              Fields:
            </Typography>
          </Stack>
          {typeFields?.map((field) => (
            <div key={field.name} style={{ marginBottom: '0.8rem' }}>
              <span style={{ color: COLORS.doc.fieldName }}>{field.name}</span>
              {field.args && <Arguments args={field.args} />}
              {`: `}
              <ReturnType type={field.type} />
            </div>
          ))}
        </div>
      )}
    </Box>
  );
};

export { TypesList };
