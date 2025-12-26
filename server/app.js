import express from "express";
import cors from "cors";

import eventRoutes from "./routes/event.routes.js";
import participantRoutes from "./routes/participant.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/events", eventRoutes);
app.use("/api/participants", participantRoutes);

app.get("/", (req, res) => {
  res.send("Secret Santa API running");
});

export default app;
