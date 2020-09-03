import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

/*eslint no-unused-vars: ["off"]*/
const detectionOptions = {
  order: ['querystring', 'localStorage'],
  lookupQuerystring: 'lng',
  lookupLocalStorage: 'i18nextLng',
};

const i18nDebugOptions = {
  debug: true,
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
};

const i18nStagingOptions = {
  debug: false,
  backend: {
    loadPath:
      'https://ksoccer-translations.imfast.io/staging/locales/{{lng}}/{{ns}}.json',
  },
};

const i18nProductionOptions = {
  debug: false,
  backend: {
    loadPath:
      'https://ksoccer-translations.imfast.io/production/locales/{{lng}}/{{ns}}.json',
  },
};

i18n
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    ...i18nDebugOptions,

    fallbackLng: 'en',
    debug: true,
    detection: detectionOptions,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
