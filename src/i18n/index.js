import I18n from 'react-native-i18n';
import { I18nManager, AsyncStorage } from 'react-native';

// Import all locales
import en from './en.json';
import ur from './ur.json';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;



export function strings(name, params = {}) {
  // console.log(I18n.translate(name) , 'translated string')
  return I18n.translate(name);
};



// let language2 = 'en';
var language = AsyncStorage.getItem('language').then((value) => {
  I18n.locale = value;
  I18n.defaultLocale = value
  if (value == null) {
    I18n.locale = 'en';
    I18n.defaultLocale = 'en'
  }
});
// Define the supported translations
I18n.translations = {
  en,
  ur
};
// I18n.locale = 'en'


export function changelocale(lang, check) {
  I18n.locale = lang;
  I18n.defaultLocale = lang;
  I18nManager.allowRTL(check);
  I18nManager.forceRTL(check);
}

export function getCurrentLocale() {
  return I18n.currentLocale();
}

export default I18n;