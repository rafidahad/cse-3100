import { useNavigate } from "react-router-dom";
import "./CharacterCard.css";

export default function CharacterCard({ character }) {
  const navigate = useNavigate();

  return (
    <div
      className="character-card"
      onClick={() => navigate(`/character/${character.id}`)}
      style={{ cursor: "pointer" }}
    >
      <img
        src={character.image}
        alt={character.name}
        className="character-img"
      />
      <div className="character-details">
        <h3>{character.name}</h3>
        <p>
          <strong>Status:</strong> {character.status}
          <br />
          <strong>Species:</strong> {character.species}
        </p>
        <button className="details-button">View Details</button>
      </div>
    </div>
  );
}
