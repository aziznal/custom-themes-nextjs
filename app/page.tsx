import ThemePreview from "@/components/ThemePreview";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2">
      <ThemeSwitcher />

      <ThemePreview />
    </div>
  );
}
