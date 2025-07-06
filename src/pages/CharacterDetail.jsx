import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CharacterDetails.css"; // ← import this CSS

export default function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
        return Promise.all(data.episode.map((url) => fetch(url).then((res) => res.json())));
      })
      .then(setEpisodes)
      .catch((err) => console.error("Failed to fetch episode data", err));
  }, [id]);

  if (!character) return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</p>;

  return (
    <div className="container" style={{ maxWidth: "1000px", margin: "2rem auto", padding: "1rem" }}>
      <div className="character-details-container">
        <div className="character-img-container">
          <img
            src={character.image}
            alt={character.name}
            style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
          />
        </div>

        <div className="character-info">
          <h2 style={{ marginBottom: "1rem" }}>{character.name}</h2>
          <ul>
            <li><strong>Status:</strong> {character.status}</li>
            <li><strong>Species:</strong> {character.species}</li>
            <li><strong>Origin:</strong> {character.origin.name}</li>
            <li><strong>Last Location:</strong> {character.location.name}</li>
            <li><strong>Total Episodes:</strong> {character.episode.length}</li>
          </ul>
        </div>
      </div>

      <div className="episode-list">
        <h4 style={{ marginBottom: "1rem" }}>🎬 Episode Appearances</h4>
        <ul>
          {episodes.map((ep) => (
            <li key={ep.id}>
              <strong>{ep.episode}</strong> – {ep.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
