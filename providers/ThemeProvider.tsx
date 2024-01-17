"use client";

import { getThemeKeyByName, premadeThemes } from "@/lib/premade-themes";
import { Theme } from "@/lib/types/theme";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeContext = {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
};

const themeContext = createContext<ThemeContext>({
  currentTheme: premadeThemes["default"],
  setTheme: () => {},
});

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentThemeName = searchParams.get("theme");

  const [currentTheme, setCurrentTheme] = useState<Theme>(
    premadeThemes["default"]
  );

  const setTheme = useCallback(
    (theme: Theme) => {
      setCurrentTheme(theme);
      router.replace(`?theme=${getThemeKeyByName(theme.name)}`);

      Object.entries(theme).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--${key}`, value);
      });
    },
    [router]
  );

  // set initial default theme on startup
  // TODO: make this eventually set the user's stored theme instead
  useEffect(() => {
    if (!currentThemeName) {
      return;
    }

    try {
      setTheme(premadeThemes[currentThemeName]);
    } catch (e: unknown) {
      console.log(`Failed to set theme ${currentThemeName}, ${e}`);
      setTheme(premadeThemes["default"]);
    }
  }, [currentThemeName, setTheme]);

  return (
    <themeContext.Provider
      value={{
        currentTheme,
        setTheme,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};

export const useThemeContext = () => useContext(themeContext);

export default ThemeProvider;
