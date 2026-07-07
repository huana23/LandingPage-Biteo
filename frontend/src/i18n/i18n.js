import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


import translationEN from "./locales/en/translation.json";
import translationVI from "./locales/vi/translation.json";

i18n
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    fallbackLng: "vi", // 
    supportedLngs: ["en", "vi"],

    defaultNS: "translation",
    debug: false,

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translation: translationEN,
      },
      vi: {
        translation: translationVI,
      },
    },
  });

export default i18n;