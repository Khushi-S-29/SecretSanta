import { useState } from "react";
import CreateEvent from "./pages/CreateEvent";
import AddParticipants from "./pages/AddParticipants";
import Draw from "./pages/Draw";

export default function App() {
  const [eventId, setEventId] = useState(null);

  if (!eventId) {
    return <CreateEvent setEventId={setEventId} />;
  }

  return (
    <div>
      <AddParticipants eventId={eventId} />
      <Draw eventId={eventId} />
    </div>
  );
}
