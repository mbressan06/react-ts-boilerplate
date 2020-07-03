import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as en from '../locales/en';

let translate: any;

i18n.use(initReactI18next).init(
  {
    resources: {
      en
    },
    fallbackLng: 'en',

    ns: ['translations'],
    defaultNS: 'translations',

    debug: false,

    interpolation: {
      escapeValue: false
    },

    react: {
      wait: true,
      bindI18n: 'languageChanged loaded'
    }
  },
  (err, t) => {
    translate = t;
  }
);

export { translate as t };

export default i18n;
