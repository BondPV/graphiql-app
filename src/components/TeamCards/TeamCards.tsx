import { useTranslation } from 'react-i18next';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import teamLeadImage from '@/assets/team-lead.jpg';
import firstTeamMemberImage from '@/assets/team-member1.jpg';
import secondTeamMemberImage from '@/assets/team-member2.jpg';

const TEAM = [
  {
    name: 'welcomePage.teamMemberFirst',
    image: firstTeamMemberImage,
    description: 'welcomePage.teamMemberFirstDescription',
  },
  {
    name: 'welcomePage.teamLead',
    image: teamLeadImage,
    description: 'welcomePage.teamLeadDescription',
  },
  {
    name: 'welcomePage.teamMemberSecond',
    image: secondTeamMemberImage,
    description: 'welcomePage.teamMemberSecondDescription',
  },
];

const TeamCards = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: { xs: 'center', md: 'space-evenly' },
        alignItems: { xs: 'center', md: 'stretch' },
        padding: { xs: '2rem 0 0', md: '3rem 0' },
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      {TEAM.map((member) => (
        <Card
          key={member.name}
          sx={{ width: { xs: '80%', md: '30%' }, marginBottom: { xs: '2rem', md: '0' } }}
        >
          <CardMedia
            sx={{
              height: 300,
              backgroundPosition: { xs: '0 25%', md: '50% 30%' },
            }}
            image={member.image}
            title={member.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {t(member.name)}
            </Typography>
            <Typography variant="body1" color="primary.dark">
              {t(member.description)}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export { TeamCards };
