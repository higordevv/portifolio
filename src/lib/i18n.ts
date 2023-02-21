import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt_br from "../translations/pt_br.json";

const resources = {
  pt_BR: {
    translation: pt_br,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt_BR",
  fallbackLng: "en_US",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
