"use client";

import { useThemeContext } from "@/providers/ThemeProvider";
import { Switch } from "./ui/switch";
import { useThemeSwitcherStore } from "@/lib/theme-store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const ThemeSwitcher = () => {
  const { setTheme, currentTheme } = useThemeContext();
  const { isTextEnabled } = useThemeSwitcherStore();

  if (!window) {
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
          Pick one of your saved themes or create a new one
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
