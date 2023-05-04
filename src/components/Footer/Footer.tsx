import { Box } from '@mui/material';
import { AuthorLink } from '../AuthorLink';
import logoRS from '../../assets/rs-school-js.svg';
import styles from './Footer.module.scss';

const authors = [
  { name: 'Pavel', url: 'https://github.com/BondPV' },
  { name: 'Marina', url: 'https://github.com/MarinaStepanchuk' },
  { name: 'Alesia', url: 'https://github.com/Alesia-V175' },
];

const Footer = (): JSX.Element => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: { sm: 'row', xs: 'column' },
        backgroundColor: 'grey.200',
      }}
    >
      <Box
        sx={{
          color: 'primary.main',
          fontSize: '1.2rem',
        }}
      >
        <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
          <img src={logoRS} alt="Rolling Scopes School" className={styles.footer__logo} />
        </a>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {authors.map((author) => (
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
  );
};

export { Footer };
