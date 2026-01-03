export default function ParticipantList({ participants }) {
  if (!participants.length) return null;

  return (
    <ul>
      {participants.map((p) => (
        <li key={p._id}>
          {p.name} ({p.email})
        </li>
      ))}
    </ul>
  );
}
