import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@mui/material';
import { COLORS } from '@/constants';

const ADVANTAGES = [
  { name: 'firstItem', text: 'welcomePage.advantageItemFirst' },
  { name: 'secondItem', text: 'welcomePage.advantageItemSecond' },
  { name: 'thirdItem', text: 'welcomePage.advantageItemThird' },
  { name: 'fourthItem', text: 'welcomePage.advantageItemFourth' },
];

const GridAdvantages = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      spacing={{ xs: 1, md: 2 }}
      columns={{ xs: 1, md: 12 }}
      color="primary.contrastText"
      padding={{ xs: '2rem', md: '2rem 0 3rem' }}
      display="flex"
      justifyContent="space-evenly"
    >
      {ADVANTAGES.map((item) => (
        <Grid
          key={item.name}
          item
          xs={5}
          sx={{
            background: COLORS.gradient.gridItem,
            borderRadius: '20px',
            alignItems: 'center',
            textAlign: 'center',
            margin: { xs: '1rem 0', sm: '2rem' },
            transition: '0.3s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <Typography variant="body1" component="p" padding={{ xs: '1rem', sm: '2rem' }}>
            {t(item.text)}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export { GridAdvantages };
