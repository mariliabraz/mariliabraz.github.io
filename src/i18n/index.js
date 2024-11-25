import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translation.json";
import translationES from "./locales/es/translation.json";
import translationPT_BR from "./locales/pt_BR/translation.json";
import translationPT_PT from "./locales/pt_PT/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
  "pt-BR": {
    translation: translationPT_BR,
  },
  "pt-PT": {
    translation: translationPT_PT,
  },
};

i18n
  .use(LanguageDetector) // Detecta automaticamente o idioma
  .use(initReactI18next) // Faz integração com React
  .init({
    resources,
    fallbackLng: "en", // Idioma padrão caso não seja detectado
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"],
      caches: ["cookie", "localStorage"], // Armazena a escolha do usuário
    },
  });

export default i18n;
