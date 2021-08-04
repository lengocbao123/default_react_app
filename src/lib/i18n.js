import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import vi from "../locales/vi.json";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "vi",
  resources: {
    vi,
    en,
  },
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
