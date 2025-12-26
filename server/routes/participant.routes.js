import express from "express";
import { addParticipant } from "../controllers/participant.controller.js";

const router = express.Router();
router.post("/", addParticipant);

export default router;
