import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = (): JSX.Element => {
  const { i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select onChange={changeLanguage} value={i18n.language}>
      <option value="en">English</option>
      <option value="ru">Русский</option>
    </select>
  );
};

export { LanguageSwitcher };
