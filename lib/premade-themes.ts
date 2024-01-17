import { Theme } from "./types/theme";

type PremadeThemes = {
  [key: string]: Theme;
};

export const premadeThemes: PremadeThemes = {
  default: {
    name: "default",

    primaryLight: "#009588",
    primary: "#005c4b",
    primaryDark: "#025144",

    secondaryLight: "#202c33",
    secondary: "#233138",
    secondaryDark: "#111b21",

    text: "#e9edef",
    textDark: "#aebac1",
    textDarker: "#8696a0",

    messageRead: "#53bdeb",

    background: "#0c1317",
  },
  newTheme: {
    name: "New Theme",

    primaryLight: "#7ea9e1",
    primary: "#4c73b6",
    primaryDark: "#375592",

    secondaryLight: "#3a3f44",
    secondary: "#2c3136",
    secondaryDark: "#202326",

    text: "#fafafa",
    textDark: "#d4d4d4",
    textDarker: "#bbbbbb",

    messageRead: "#9ad0ec",

    background: "#1e1e1e",
  },
  redTheme: {
    name: "Red Theme",

    primaryLight: "#e57373",
    primary: "#d32f2f",
    primaryDark: "#b71c1c",

    secondaryLight: "#424242",
    secondary: "#303030",
    secondaryDark: "#212121",

    text: "#ffffff",
    textDark: "#e0e0e0",
    textDarker: "#bdbdbd",

    messageRead: "#ff8a65",

    background: "#121212",
  },
  lightModeRed: {
    name: "Red - light mode",

    primaryLight: "#ffcccb",
    primary: "#ff8a8a",
    primaryDark: "#ff5252",

    secondaryLight: "#f5f5f5",
    secondary: "#eeeeee",
    secondaryDark: "#e0e0e0",

    text: "#212121",
    textDark: "#616161",
    textDarker: "#757575",

    messageRead: "#b2ff59",

    background: "#ffffff",
  },
};

export function getPremadeThemes(): Theme[] {
  return Object.values(premadeThemes);
}

export function getThemeKeyByName(name: string): string | undefined {
  return Object.entries(premadeThemes).find(
    ([key, theme]) => theme.name === name
  )?.[0];
}
