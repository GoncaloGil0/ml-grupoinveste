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

import bbEn from './en/companies/bb.en.json'
import esportzyEn from './en/companies/esportzy.en.json'
import investEn from './en/companies/invest.en.json'
import rootkeyEn from './en/companies/rootkey.en.json'
import safeEn from './en/companies/safe.en.json'
import offerEn from './en/offer.en.json'

import bbPt from './pt/companies/bb.pt.json'
import esportzyPt from './pt/companies/esportzy.pt.json'
import investPt from './pt/companies/invest.pt.json'
import rootkeyPt from './pt/companies/rootkey.pt.json'
import safePt from './pt/companies/safe.pt.json'
import offerPt from './pt/offer.pt.json'


i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ...footerEn,
        ...navBarEn,
        ...aboutEn,
        ...homeEn,
        ...bbEn,
        ...esportzyEn,
        ...investEn,
        ...rootkeyEn,
        ...offerEn,
        ...safeEn
      }
    },
    pt: {
      translation: {
        ...footerPt,
        ...navBarPt,
        ...aboutPt,
        ...homePt,
        ...bbPt,
        ...esportzyPt,
        ...investPt,
        ...rootkeyPt,
        ...offerPt,
        ...safePt
      }
    },
  },
  lng: getLocales()[0].languageCode,
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
});

export default i18n;