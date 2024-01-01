"use client";

import { Theme, defaultTheme } from "@/lib/types/theme";
import { PropsWithChildren, createContext, useContext, useEffect } from "react";

type ThemeContext = {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
};

const themeContext = createContext<ThemeContext>({
  currentTheme: defaultTheme,
  setTheme: () => {},
});

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const setTheme = (theme: Theme) => {
    Object.entries(theme).forEach(([key, value]) => {
      console.log(`Setting ${key} to ${value}`);
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  };

  // set initial default theme on startup
  // TODO: make this eventually set the user's stored theme instead
  useEffect(() => {
    setTheme(defaultTheme);
  }, []);

  return (
    <themeContext.Provider
      value={{
        currentTheme: defaultTheme,
        setTheme,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};

export const useThemeContext = () => useContext(themeContext);

export default ThemeProvider;
