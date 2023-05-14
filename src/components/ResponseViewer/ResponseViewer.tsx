import JsonView from 'react18-json-view';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useAppSelector } from '@/hooks/redux';
import '@/theme/styleViewer.css';

const ResponseViewer = (): JSX.Element => {
  const editorResponse = useAppSelector((state) => state.editorResponse);

  return (
    <Box
      sx={{
        padding: 1,
        maxHeight: { xs: '50vh', md: '100%' },
        backgroundColor: { xs: grey.A200, sm: 'inherit' },
        overflow: 'auto',
      }}
    >
      <JsonView src={editorResponse.value} />;
    </Box>
  );
};

export { ResponseViewer };
