import { useState } from "react";
import { addParticipant } from "../api/participant.api";

export default function ParticipantForm({ eventId, onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [wishlist, setWishlist] = useState("");

  const handleSubmit = async () => {
    const res = await addParticipant({
      eventId,
      name,
      email,
      wishlist
    });

    onAdd(res.data);
    setName("");
    setEmail("");
    setWishlist("");
  };

  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Wishlist (optional)"
        value={wishlist}
        onChange={(e) => setWishlist(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
