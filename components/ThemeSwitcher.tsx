"use client";

import { useThemeContext } from "@/providers/ThemeProvider";
import { Switch } from "./ui/switch";
import { useThemeSwitcherStore } from "@/lib/theme-store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useEffect, useState } from "react";
import { ThemePreview } from "./ThemePreview";
import { getPremadeThemes } from "@/lib/premade-themes";

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
    <div className="bg-white rounded-lg p-6 w-full overflow-y-hidden flex flex-col">
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

      <Tabs
        defaultValue="premade-themes"
        className="mt-6 flex flex-col max-h-full min-h-0"
      >
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="premade-themes">
            Premade themes
          </TabsTrigger>

          <TabsTrigger className="w-full" value="saved-themes">
            Saved themes
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="saved-themes"
          className="mt-6 flex flex-col min-h-0"
        >
          <span>Pick one of your saved themes or create a new one</span>
        </TabsContent>

        <TabsContent value="premade-themes" className="mt-6">
          <span>Pick a premade theme</span>

          <div className="flex flex-wrap mt-6 overflow-y-auto min-h-0">
            {getPremadeThemes().map((theme) => (
              <ThemePreview
                key={theme.name}
                theme={{ ...theme }}
                onClick={() => {
                  setTheme(theme);
                }}
                onDelete={() => {}}
                isSelected={currentTheme.name === theme.name}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

ThemeSwitcher.displayName = "ThemeSwitcher";

export default ThemeSwitcher;
