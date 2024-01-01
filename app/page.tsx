import ThemePreview from "@/components/ThemePreview";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row gap-2">
      {/* Theme Switcher  */}
      <div>
        <ThemeSwitcher />
      </div>

      {/* Theme Preview  */}
      <div>
        <ThemePreview />
      </div>
    </div>
  );
}
