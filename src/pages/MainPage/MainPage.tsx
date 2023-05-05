import { useTranslation } from 'react-i18next';

const MainPage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('mainPage')}</p>
    </div>
  );
};

export { MainPage };
