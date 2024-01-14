import ThemePreviewDesktop from "@/components/ThemePreviewDesktop";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="flex items-stretch py-12 h-full w-full gap-2">
      <ThemePreviewDesktop />
      <ThemeSwitcher />
    </div>
  );
}
