import React from 'react';
import { useTranslation } from 'react-i18next';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

export enum Lang {
  en = 'en',
  ru = 'ru',
}

const LanguageSwitcher = (): JSX.Element => {
  const { i18n } = useTranslation();

  const changeLanguage = (event: React.MouseEvent<HTMLElement>, newLanguage: string): void => {
    i18n.changeLanguage(newLanguage);
  };

  return (
    <ToggleButtonGroup value={i18n.language} exclusive onChange={changeLanguage}>
      <ToggleButton value={Lang.ru}>RU</ToggleButton>
      <ToggleButton value={Lang.en}>EN</ToggleButton>
    </ToggleButtonGroup>
  );
};

export { LanguageSwitcher };
