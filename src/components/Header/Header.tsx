import { AppBar, Box, Container, Stack, useScrollTrigger } from '@mui/material';
import { NavMenu } from '../NavMenu';
import { Logo } from '../Logo';
import { LanguageSwitcher } from '../LanguageSwitcher';

const Header = (): JSX.Element => {
  const trigger = useScrollTrigger({ threshold: 80, disableHysteresis: true });

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: `${!trigger ? 'primary.dark' : 'primary.main'}` }}
    >
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center">
          <Box mr={'auto'} sx={{ order: 1 }}>
            <Logo />
          </Box>
          <Box sx={{ order: { xs: '3', sm: '2' } }}>
            <NavMenu />
          </Box>
          <Box ml={1} sx={{ order: { xs: '2', sm: '3' } }}>
            <LanguageSwitcher />
          </Box>
        </Stack>
      </Container>
    </AppBar>
  );
};

export { Header };
