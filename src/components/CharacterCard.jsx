import { Link } from "react-router-dom";
import "./CharacterCard.css";
export default function CharacterCard({ character }) {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} className="character-img" />
      <div className="character-details">
        <h3>{character.name}</h3>
        <p>
          <strong>Status:</strong> {character.status}<br />
          <strong>Species:</strong> {character.species}
        </p>
        <Link to={`/character/${character.id}`}>
          <button className="details-button">View Details</button>
        </Link>
      </div>
    </div>
  );
}
