import { useTheme } from "../context/ThemeContext";
export default function Header() {
  const { theme, toggle } = useTheme();
  return (
    <header className="app-header">
      <h1>🚀 Rick & Morty Explorer</h1>
      <button onClick={toggle} className="theme-toggle">
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </header>
  );
}