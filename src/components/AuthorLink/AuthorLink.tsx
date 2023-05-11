import { useTranslation } from 'react-i18next';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button, Link } from '@mui/material';

interface IAuthorLink {
  name: string;
  url: string;
}

const AuthorLink = ({ name, url }: IAuthorLink): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Button
      variant="text"
      component={Link}
      href={url}
      target="_blank"
      rel="noreferrer"
      sx={{
        '&:hover': {
          color: 'primary.dark',
        },
      }}
    >
      <GitHubIcon
        sx={{
          fontSize: 40,
          mr: 1,
        }}
      />
      {t(`author.${name}`)}
    </Button>
  );
};

export { AuthorLink };
