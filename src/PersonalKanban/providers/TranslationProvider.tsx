import React from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18next from "i18next";

import en from "PersonalKanban/assets/locales/en/translations.json";
import fr from "PersonalKanban/assets/locales/fr/translations.json";

const i18n = i18next.createInstance();

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: { ...en } },
      fr: { translation: { ...fr } },
    },
    interpolation: {
      escapeValue: false,
    },
  });

type TranslationProviderProps = {};

const TranslationProvider: React.FC<TranslationProviderProps> = ({
  children,
}) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationProvider;
