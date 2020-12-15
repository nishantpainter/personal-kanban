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
  brown,
  blueGrey,
  lightGreen,
} from "@material-ui/core/colors";

import StorageService from "PersonalKanban/services/StorageService";

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

  const [darkTheme, setDarkTheme] = React.useState(
    props.darkTheme || StorageService.getDarkMode()
  );

  const handleToggleDarkTheme = React.useCallback(() => {
    setDarkTheme((darkTheme: Boolean | undefined) => {
      StorageService.setDarkMode(!darkTheme);
      return !darkTheme;
    });
  }, []);

  const theme: Theme = createMuiTheme({
    palette: {
      primary: darkTheme ? lightGreen : brown,
      secondary: blueGrey,
      type: darkTheme ? "dark" : "light",
    },
    overrides: {
      MuiPaper: {
        root: {
          cursor: "pointer",
          padding: 8,
        },
      },
      MuiDivider: {
        root: {
          backgroundColor: "rgba(255,255,255,0.5)",
        },
      },
    },
    typography: {
      fontFamily: "'Nunito', sans-serif",
      fontWeightLight: 300,
      fontWeightMedium: 400,
      fontWeightRegular: 400,
      fontWeightBold: 700,
    },
    props: {
      MuiDivider: {
        light: darkTheme ? false : true,
      },
      MuiTextField: {
        variant: "outlined",
        margin: "dense",
        fullWidth: true,
      },
      MuiButton: {
        size: "small",
      },
      MuiRadio: {
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
      darkTheme,
      handleToggleDarkTheme,
    }),
    [darkTheme, handleToggleDarkTheme]
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
