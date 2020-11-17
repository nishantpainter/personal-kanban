import ThemeProvider from "../src/PersonalKanban/providers/ThemeProvider";
import TranslationProvider from "../src/PersonalKanban/providers/TranslationProvider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const globalTypes = {
  darkTheme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: false,
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: false, title: "Light" },
        { value: true, title: "Dark" },
      ],
    },
  },
};

const withThemeProvider = (Story, context) => {
  const darkTheme = context.globals.darkTheme;
  return (
    <ThemeProvider darkTheme={darkTheme}>
      <Story {...context} />
    </ThemeProvider>
  );
};

const withDivWrapper = (Story, context) => {
  const story = <Story {...context} />;
  return context.parameters.withWrapper ? (
    <div style={{ width: 350 }}>{story}</div>
  ) : (
    story
  );
};

const withTranslationProvider = (Story, context) => {
  return (
    <TranslationProvider>
      <Story {...context} />
    </TranslationProvider>
  );
};

export const decorators = [
  withThemeProvider,
  withDivWrapper,
  withTranslationProvider,
];
