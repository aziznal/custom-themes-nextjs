export type Theme = {
  name: string;

  primaryLight: string;
  primary: string;
  primaryDark: string;

  secondaryLight: string;
  secondary: string;
  secondaryDark: string;

  text: string;
  textDark: string;
  textDarker: string;

  background: string;
};

export const defaultTheme: Theme = {
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

  background: "#0c1317",
};
