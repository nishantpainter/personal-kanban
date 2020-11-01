import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  MuiThemeProvider,
  createMuiTheme,
  Theme,
} from "@material-ui/core/styles";
import {
  purple,
  indigo,
  blue,
  green,
  yellow,
  orange,
  red,
} from "@material-ui/core/colors";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    custom?: any;
  }
  interface ThemeOptions {
    custom?: any;
  }
}

const ThemeContext = React.createContext({});

type ThemeProviderProps = {
  darkTheme?: boolean;
};

const pastelCode = 200;

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children } = props;

  const [darkTheme, setDarkTheme] = React.useState(props.darkTheme);

  const handleToggleDarkTheme = React.useCallback(() => {
    setDarkTheme((darkTheme: Boolean | undefined) => {
      return !darkTheme;
    });
  }, []);

  const theme: Theme = createMuiTheme({
    palette: {
      type: darkTheme ? "dark" : "light",
    },
    overrides: {
      MuiPaper: {
        root: {
          cursor: "pointer",
          padding: 8,
        },
      },
    },
    props: {
      MuiDivider: {
        light: true,
      },
      MuiTextField: {
        variant: "outlined",
        margin: "dense",
        fullWidth: true,
      },
      MuiButton: {
        size: "small",
      },
    },
    custom: {
      colors: {
        pastel: {
          violet: purple[pastelCode],
          indigo: indigo[pastelCode],
          blue: blue[pastelCode],
          green: green[pastelCode],
          yellow: yellow[pastelCode],
          orange: orange[pastelCode],
          red: red[pastelCode],
        },
      },
    },
  });

  const value = React.useMemo(
    () => ({
      handleToggleDarkTheme,
    }),
    [handleToggleDarkTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): any => React.useContext(ThemeContext);

export default ThemeProvider;
