import Box from '@mui/material/Box';
import { AUTHORS } from '../../constants';
import { AuthorLink } from './AuthorLink';

const Footer = (): JSX.Element => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[200],
      }}
    >
      <Box display="flex" justifyContent="flex-end">
        {AUTHORS.map((author) => (
          <AuthorLink key={author.name} {...author} />
        ))}
      </Box>
    </Box>
  );
};

export { Footer };
