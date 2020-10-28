import ThemeProvider from "../src/PersonalKanban/providers/ThemeProvider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const withThemeProvider = (Story, context) => {
  const darkMode = context.globals.darkMode;
  return (
    <ThemeProvider darkMode={darkMode}>
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

export const decorators = [withThemeProvider, withDivWrapper];
