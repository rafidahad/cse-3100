import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);

        // Fetch all episodes in parallel
        return Promise.all(data.episode.map((url) => fetch(url).then((res) => res.json())));
      })
      .then(setEpisodes)
      .catch((err) => console.error("Failed to fetch episode data", err));
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div className="container my-4">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} className="img-fluid" />
      <p>
        <strong>Status:</strong> {character.status}<br />
        <strong>Species:</strong> {character.species}<br />
        <strong>Origin:</strong> {character.origin.name}<br />
        <strong>Last Location:</strong> {character.location.name}<br />
        <strong>Episodes:</strong> {character.episode.length}
      </p>

      {episodes.length > 0 && (
        <>
          <h4 className="mt-3">🎬 Episode Appearances</h4>
          <ul>
            {episodes.map((ep) => (
              <li key={ep.id}>
                {ep.episode} – {ep.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
