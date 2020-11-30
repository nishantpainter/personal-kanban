import React from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18next from "i18next";

import cn from "PersonalKanban/assets/locales/cn/translations.json";
import de from "PersonalKanban/assets/locales/de/translations.json";
import en from "PersonalKanban/assets/locales/en/translations.json";
import es from "PersonalKanban/assets/locales/es/translations.json";
import fr from "PersonalKanban/assets/locales/fr/translations.json";
import ind from "PersonalKanban/assets/locales/in/translations.json";
import ru from "PersonalKanban/assets/locales/ru/translations.json";
import jp from "PersonalKanban/assets/locales/jp/translations.json";

export { useTranslation } from "react-i18next";

const i18n = i18next.createInstance();

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    resources: {
      cn: { translation: { ...cn } },
      de: { translation: { ...de } },
      en: { translation: { ...en } },
      es: { translation: { ...es } },
      fr: { translation: { ...fr } },
      in: { translation: { ...ind } },
      jp: { translation: { ...jp } },
      ru: { translation: { ...ru } },
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
