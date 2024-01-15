"use client";

import { useThemeContext } from "@/providers/ThemeProvider";
import { Switch } from "./ui/switch";
import { useThemeSwitcherStore } from "@/lib/theme-store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useEffect, useState } from "react";
import { ThemePreview } from "./ThemePreview";
import { premadeThemes } from "@/lib/premade-themes";

const ThemeSwitcher = () => {
  const { setTheme, currentTheme } = useThemeContext();
  const { isTextEnabled } = useThemeSwitcherStore();

  const [isClientLoaded, setIsClientLoaded] = useState(false);

  useEffect(() => {
    setIsClientLoaded(true);
  }, []);

  if (!isClientLoaded) {
    return <>Loading</>;
  }

  return (
    <div className="bg-white rounded-lg p-6 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Theme Manager</h1>

        <div className="flex items-center gap-3">
          <span>Toggle text</span>

          <Switch
            checked={isTextEnabled}
            onCheckedChange={(state) =>
              useThemeSwitcherStore.setState({
                isTextEnabled: state,
              })
            }
          />
        </div>
      </div>

      <Tabs defaultValue="saved-themes" className="mt-6">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="saved-themes">
            Saved themes
          </TabsTrigger>

          <TabsTrigger className="w-full" value="premade-themes">
            Premade themes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="saved-themes" className="mt-6">
          <span>Pick one of your saved themes or create a new one</span>

          <div className="flex flex-wrap overflow-y-auto mt-6">
            <ThemePreview
              theme={{ ...premadeThemes.default }}
              onClick={() => {}}
              onDelete={() => {}}
              isSelected
            />

            <ThemePreview
              theme={{ ...premadeThemes.default }}
              onClick={() => {}}
              onDelete={() => {}}
            />

            <ThemePreview
              theme={{ ...premadeThemes.default }}
              onClick={() => {}}
              onDelete={() => {}}
            />

            <ThemePreview
              theme={{ ...premadeThemes.default }}
              onClick={() => {}}
              onDelete={() => {}}
            />

            <ThemePreview
              theme={{ ...premadeThemes.default }}
              onClick={() => {}}
              onDelete={() => {}}
            />

            <ThemePreview
              theme={{ ...premadeThemes.default }}
              onClick={() => {}}
              onDelete={() => {}}
            />
          </div>
        </TabsContent>

        <TabsContent value="premade-themes" className="mt-6">
          Pick a premade theme
        </TabsContent>
      </Tabs>
    </div>
  );
};

ThemeSwitcher.displayName = "ThemeSwitcher";

export default ThemeSwitcher;
