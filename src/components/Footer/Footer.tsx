import { Box, Container, Divider } from '@mui/material';
import logoRS from '@/assets/rs-school-js.svg';
import { AuthorLink } from '../AuthorLink';

const AUTHORS = [
  { name: 'Marina', url: 'https://github.com/MarinaStepanchuk' },
  { name: 'Pavel', url: 'https://github.com/BondPV' },
  { name: 'Alesia', url: 'https://github.com/Alesia-V175' },
];

const Footer = (): JSX.Element => (
  <Box component="footer" bgcolor={'primary.light'} mt={'auto'}>
    <Container maxWidth="xl">
      <Divider sx={{ height: '1rem' }} />
      <Box
        sx={{
          py: 2,
          px: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: { sm: 'row', xs: 'column' },
        }}
      >
        <Box
          sx={{
            color: 'primary.main',
            fontSize: '1.2rem',
          }}
        >
          <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
            <Box
              component="img"
              src={logoRS}
              alt="Rolling Scopes School"
              sx={{
                height: 'auto',
                width: '80px',
                opacity: '0.5',
                transition: '0.3s all',
                '&:hover': {
                  opacity: '1',
                },
              }}
            />
          </a>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {AUTHORS.map((author) => (
            <AuthorLink key={author.name} {...author} />
          ))}
        </Box>
        <Box
          component="span"
          sx={{
            color: 'primary.main',
            fontSize: '1.2rem',
          }}
        >
          2023
        </Box>
      </Box>
    </Container>
  </Box>
);

export { Footer };
