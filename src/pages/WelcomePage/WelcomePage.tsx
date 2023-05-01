import { useTranslation } from 'react-i18next';

const WelcomePage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('welcomePage')}</p>
    </div>
  );
};

export { WelcomePage };
