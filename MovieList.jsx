export default function MovieList({ movies, refresh }) {
  async function vote(movieId) {
    await fetch("http://localhost:5000/votes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ movieId, userId: "user123" })
    });

    refresh();
  }

  return (
    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
      {movies.map(m => (
        <div key={m._id}>
          <img src={m.poster} width={150} />
          <p>{m.title}</p>
          <p>Votes: {m.votes}</p>
          <button onClick={() => vote(m._id)}>Vote</button>
        </div>
      ))}
    </div>
  );
}
