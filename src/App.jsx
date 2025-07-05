import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query) return;
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`);
    const data = await res.json();
    setResults(data.data || []);
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Anime Tracker</h1>
      <input
        type="text"
        placeholder="Search anime..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "0.5rem", width: "300px" }}
      />
      <button onClick={handleSearch} style={{ marginLeft: "1rem", padding: "0.5rem" }}>
        Search
      </button>

      <ul>
        {results.map((anime) => (
          <li key={anime.mal_id}>
            <strong>{anime.title}</strong> ({anime.year || "N/A"})
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
