import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

// 🌐 Available locales (English only)
export const locales = ['en', 'en-US'];

// 🏳️ Locale display names
export const localeNames = {
  en: '🇺🇸 English',
};

// 🇺🇸 Default locale
export const defaultLocale = 'en';

// 🌍 Detect browser language and match to available locale
export function getLocale(headers) {
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

// 📚 Load dictionary dynamically
const dictionaries = {
  en: () => import('@/locales/en.json').then((module) => module.default),
};

// ⚙️ Fetch translation dictionary safely
export const getDictionary = async (locale) => {
  if (!locales.includes(locale)) {
    locale = defaultLocale;
  }
  return dictionaries[locale]();
};
