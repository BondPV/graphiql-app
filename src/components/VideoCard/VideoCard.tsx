import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface IVideoCard {
  videoUrl: string;
}
const VideoCard = ({ videoUrl }: IVideoCard): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Card sx={{ background: 'transparent' }}>
      {videoUrl ? (
        <CardMedia
          component="iframe"
          image={videoUrl}
          sx={{
            width: { xs: '80%', md: '50%' },
            minHeight: { xs: '17rem', sm: '30rem' },
            border: 'none',
            margin: '3rem auto',
          }}
        />
      ) : (
        <CardContent>
          <Typography variant="h5" component="p" color="primary.light" textAlign="center">
            {t('welcomePage.videoError')}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export { VideoCard };
