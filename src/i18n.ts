import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['pl', 'en'],
    fallbackLng: 'en',
    detection: {
      order: ['path', 'cookie', 'navigator', 'htmlTag'],
      caches: ['cookie'],
      // cookieDomain: future domain
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  });

export default i18n;
