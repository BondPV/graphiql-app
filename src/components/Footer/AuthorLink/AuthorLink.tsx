import { Button, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

interface IAuthorLink {
  name: string;
  url: string;
}

const AuthorLink = ({ name, url }: IAuthorLink): JSX.Element => {
  return (
    <Button variant="text" component={Link} href={url} target="_blank" rel="noreferrer">
      <GitHubIcon sx={{ fontSize: 40, mr: 1 }} />
      {name}
    </Button>
  );
};

export { AuthorLink };
