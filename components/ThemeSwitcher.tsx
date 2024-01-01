"use client";

import { useThemeContext } from "@/providers/ThemeProvider";

const ThemeSwitcher = () => {
  const { setTheme, currentTheme } = useThemeContext();

  return (
    <div>
      <span>Current Theme: {currentTheme.name}</span>
    </div>
  );
};

ThemeSwitcher.displayName = "ThemeSwitcher";

export default ThemeSwitcher;
