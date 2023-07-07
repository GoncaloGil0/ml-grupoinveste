import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';

import EN from './GB/GB.json'
import PT from './PT/PT.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {translation: EN},
    pt: {translation: PT},
  },
  lng: getLocales()[0].languageCode, 
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
});

export default i18n;