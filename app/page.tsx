import ThemePreviewDesktop from "@/components/ThemePreviewDesktop";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="flex items-center w-full gap-2">
      <ThemePreviewDesktop />

      <ThemeSwitcher />
    </div>
  );
}
