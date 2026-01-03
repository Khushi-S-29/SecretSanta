import { useState } from "react";
import { createEvent } from "../api/event.api";

export default function CreateEvent({ setEventId }) {
  const [name, setName] = useState("");

  const handleCreate = async () => {
    const res = await createEvent(name);
    setEventId(res.data._id);
  };

  return (
    <div>
      <h2>Create Secret Santa Event</h2>
      <input
        placeholder="Event name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
}
