import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import english from './locales/en/translations.json';
import russian from './locales/ru/translations.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources: {
      en: {
        translations: english,
      },
      ru: {
        translations: russian,
      },
    },
    ns: ['translations'],
    defaultNS: 'translations',
  });

export default i18n;
