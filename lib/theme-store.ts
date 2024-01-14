import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Theme } from "./types/theme";

interface ThemeSwitcherStore {
  isTextEnabled: boolean;

  themes: Theme[];

  addTheme: (theme: Theme) => void;
  removeTheme: (theme: Theme) => void;
}

export const useThemeSwitcherStore = create(
  persist<ThemeSwitcherStore>(
    (set, get) => ({
      isTextEnabled: false,

      themes: [],

      addTheme: (theme: Theme) => set({ themes: [...get().themes, theme] }),
      removeTheme: (theme: Theme) =>
        set({
          themes: get().themes.filter((t) => t.name !== theme.name),
        }),
    }),
    {
      name: "theme-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
