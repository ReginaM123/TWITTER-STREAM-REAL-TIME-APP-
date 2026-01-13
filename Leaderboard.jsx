export default function Leaderboard({ leaders }) {
  return (
    <div>
      {leaders.map((m, i) => (
        <p key={i}>
          #{i + 1} — {m.title} ({m.votes} votes)
        </p>
      ))}
    </div>
  );
}
