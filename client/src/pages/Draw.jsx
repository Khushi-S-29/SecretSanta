import { useState } from "react";
import { drawEvent } from "../api/event.api";

export default function Draw({ eventId }) {
  const [message, setMessage] = useState("");

  const handleDraw = async () => {
    try {
      await drawEvent(eventId);
      setMessage("Draw successful! Emails sent.");
    } catch {
      setMessage(" Draw failed. Check participants.");
    }
  };

  return (
    <div>
      <h2>Draw Names</h2>
      <button onClick={handleDraw}>Draw Secret Santa</button>
      <p>{message}</p>
    </div>
  );
}
