import { useState } from "react";
import ParticipantForm from "../components/ParticipantForm";
import ParticipantList from "../components/ParticipantList";

export default function AddParticipants({ eventId }) {
  const [participants, setParticipants] = useState([]);

  return (
    <div>
      <h2>Add Participants</h2>
      <ParticipantForm
        eventId={eventId}
        onAdd={(p) => setParticipants([...participants, p])}
      />
      <ParticipantList participants={participants} />
    </div>
  );
}
