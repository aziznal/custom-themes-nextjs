import ThemePreviewDesktop from "@/components/ThemePreviewDesktop";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="flex max-h-[100vh] items-stretch py-12 w-full gap-2">
      <ThemePreviewDesktop />
      <ThemeSwitcher />
    </div>
  );
}
