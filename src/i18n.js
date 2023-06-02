import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en.json"; // Import your language files
import translationRU from "./locales/ru.json";
import translationUZ from "./locales/uz.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  uz: {
    translation: translationUZ,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Set the default language here
  fallbackLng: "en", // Set the fallback language here
  interpolation: {
    escapeValue: false, // React already escapes content by default
  },
});

export default i18n;
