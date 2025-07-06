export default function About() {
  return (
    <div className="container my-4" style={{ maxWidth: "800px", margin: "2rem auto", padding: "1rem" }}>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>About Rick & Morty Explorer</h2>
      
      <p style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
        This is a simple React app that lets you browse characters from the Rick & Morty universe. 
        It includes features like character search, status filter, pagination, and detail pages.
        <br /><br />
        <strong>Built for:</strong> CSE3100 Assignment 1
        <br />
        <strong>Developed by:</strong> Rafid Ahad
        <br />
        <strong>GitHub:</strong>{" "}
        <a 
          href="https://github.com/rafidahad" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: "#4a00e0", fontWeight: "500", textDecoration: "none" }}
        >
          github.com/rafidahad
        </a>
      </p>
    </div>
  );
}
