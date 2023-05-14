import { useTranslation } from 'react-i18next';
import DescriptionIcon from '@mui/icons-material/Description';
import { IconButton, Tooltip } from '@mui/material';

interface IButtonProps {
  toggleDrawer: () => void;
}

const ButtonSchema = ({ toggleDrawer }: IButtonProps): JSX.Element => {
  const { t } = useTranslation();

  const handleClickGetSchema = async (): Promise<void> => {
    toggleDrawer();
  };

  return (
    <Tooltip title={t('Documentation')} placement="bottom">
      <IconButton onClick={handleClickGetSchema}>
        <DescriptionIcon sx={{ fontSize: '30px' }} />
      </IconButton>
    </Tooltip>
  );
};

export { ButtonSchema };
