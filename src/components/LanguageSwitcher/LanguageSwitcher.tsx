import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { alpha } from '@mui/material/styles';
import { Box, MenuItem, Stack, IconButton, Popover } from '@mui/material';

interface ILang {
  value: string;
  label: string;
  icon: string;
}

const LANGS: ILang[] = [
  {
    value: 'en',
    label: 'English',
    icon: '/assets/icons/flag_en.svg',
  },
  {
    value: 'ru',
    label: 'Russian',
    icon: '/assets/icons/flag_ru.svg',
  },
];

const LANG_ICON_DEFAULT = '/assets/icons/lang.svg';

const LanguageSwitcher = (): JSX.Element => {
  const [icon, setIcon] = useState(LANG_ICON_DEFAULT);
  const [open, setOpen] = useState<HTMLElement | null>(null);
  const { t, i18n } = useTranslation();

  const handleOpen = (event: React.MouseEvent<HTMLElement>): void => {
    setOpen(event.currentTarget);
  };

  const handleClose = (): void => {
    setOpen(null);
  };

  const changeLanguage = (elem: ILang): void => {
    i18n.changeLanguage(elem.value);
    setIcon(elem.icon);
    setOpen(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
          }),
        }}
      >
        <Box component="img" alt={'lang-icon'} src={icon} sx={{ width: 28 }} />
      </IconButton>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Stack spacing={0.75}>
          {LANGS.map((elem) => (
            <MenuItem key={elem.value} onClick={(): void => changeLanguage(elem)}>
              <Box component="img" alt={elem.label} src={elem.icon} sx={{ width: 28, mr: 2 }} />
              {`${t(elem.label)}`}
            </MenuItem>
          ))}
        </Stack>
      </Popover>
    </>
  );
};

export { LanguageSwitcher };
