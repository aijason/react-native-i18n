// @flow

'use strict';

const RNI18n = require('react-native').NativeModules.RNI18n;
const I18nJs = require('i18n-js');

if (typeof RNI18n !== 'undefined') {
  I18nJs.locale = RNI18n.languages[0];
} else if (__DEV__) {
  // /!\ react-native-i18n is not linked
  I18nJs.locale = 'en'; // a locale from your available translations
  I18nJs.displayDate = (format, date) => I18nJs.l(`date.formats.${format}`, date);
}

export const getLanguages = () => RNI18n.getLanguages();
export default I18nJs;
