import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [info, setInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCharacters = async () => {
    setIsLoading(true);
    let url = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCharacters(data.results || []);
      setInfo(data.info || {});
    } catch (err) {
      setCharacters([]);
      setInfo(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [page, search, status]);

  return (
    <main className="container my-4">
      <div className="search-bar">
        <input type="text" placeholder="Search by name..." value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
        <select value={status} onChange={(e) => { setStatus(e.target.value); setPage(1); }}>
          <option value="">Filter by Status</option>
          <option value="alive">Alive 🟢</option>
          <option value="dead">Dead 🔴</option>
          <option value="unknown">Unknown ⚪</option>
        </select>
      </div>
      {isLoading ? <p>Loading...</p> : (
        <>
          <div className="card-grid">
            {characters.map((char) => <CharacterCard key={char.id} character={char} />)}
          </div>
          <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={!info?.prev} className="btn btn-outline-primary">⬅ Prev</button>
            <span>Page {page}</span>
            <button onClick={() => setPage(p => p + 1)} disabled={!info?.next} className="btn btn-outline-primary">Next ➡</button>
          </div>
        </>
      )}
    </main>
  );
}
