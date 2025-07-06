import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="app-footer"
      style={{
        background: "linear-gradient(to right, #2575fc, #6a11cb)",
        color: "#fff",
        textAlign: "center",
        padding: "1.2rem 1rem",
        marginTop: "2rem",
      }}
    >
      <p style={{ marginBottom: "0.5rem" }}>
        <Link to="/about" style={{ color: "#fff", textDecoration: "none", marginRight: "1.5rem" }}>
          About Us
        </Link>
        <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>
          Contact
        </Link>
      </p>
      <p style={{ margin: 0 }}>
        Developed by Rafid Ahad • {new Date().getFullYear()}
      </p>
    </footer>
  );
}
