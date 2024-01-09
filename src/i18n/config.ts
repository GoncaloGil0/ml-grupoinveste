import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';

import footerPt from './pt/footer.pt.json'
import footerEn from './en/footer.en.json'
import navBarEn from './en/navBar.en.json'
import navBarPt from './pt/navBar.pt.json'
import aboutEn from './en/about.en.json'
import aboutPt from './pt/about.pt.json'
import homeEn from './en/home.en.json'
import homePt from './pt/home.pt.json'


i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ...footerEn,
        ...navBarEn,
        ...aboutEn,
        ...homeEn
      }
    },
    pt: {
      translation: {
        ...footerPt,
        ...navBarPt,
        ...aboutPt,
        ...homePt
      }
    },
  },
  lng: getLocales()[0].languageCode,
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
});

export default i18n;