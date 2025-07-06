import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle: () => setTheme(t => t === "light" ? "dark" : "light") }}>
      {children}
    </ThemeContext.Provider>
  );
}
