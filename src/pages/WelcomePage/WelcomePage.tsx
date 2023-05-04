import { useTranslation } from 'react-i18next';
import { CodeEditor } from '../../components/CodeEditor';

const WelcomePage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('welcomePage')}</p>
      <CodeEditor />
    </div>
  );
};

export { WelcomePage };
