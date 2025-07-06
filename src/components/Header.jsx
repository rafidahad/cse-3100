import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowSticky(scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
    color: "#fff",
  };

  const stickyStyle = {
    ...baseHeaderStyle,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
    opacity: showSticky ? 1 : 0,
    transform: showSticky ? "translateY(0)" : "translateY(-100%)",
    pointerEvents: showSticky ? "auto" : "none",
    transition: "opacity 0.4s ease, transform 0.4s ease",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  };

  const renderHeaderContent = () => (
    <>
      {/* Left: Logo/Title */}
      {location.pathname !== "/" ? (
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1 style={{ cursor: "pointer", margin: 0 }}>🚀 Rick & Morty Explorer</h1>
        </Link>
      ) : (
        <h1 style={{ margin: 0 }}>🚀 Rick & Morty Explorer</h1>
      )}

      {/* Right: Links + Toggle */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
        <Link to="/about" style={{ color: "#fff", textDecoration: "none", fontWeight: "500" }}>
          About Us
        </Link>
        <Link to="/contact" style={{ color: "#fff", textDecoration: "none", fontWeight: "500" }}>
          Contact
        </Link>
        <button
          onClick={toggle}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: theme === "light" ? "#f1f1f1" : "#333",
            color: theme === "light" ? "#333" : "#f1f1f1",
            border: "none",
            borderRadius: "20px",
            padding: "0.4rem 1rem",
            cursor: "pointer",
            fontWeight: "500",
            fontSize: "0.95rem",
            boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
            transition: "background 0.3s, color 0.3s",
          }}
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Normal header (scrolls away) */}
      <header style={baseHeaderStyle}>{renderHeaderContent()}</header>

      {/* Sticky header (fades in after scroll) */}
      <header style={stickyStyle}>{renderHeaderContent()}</header>
    </>
  );
}
