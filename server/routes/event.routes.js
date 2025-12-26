import express from "express";
import { createEvent } from "../controllers/event.controller.js";
import { drawNames } from "../controllers/draw.controller.js";

const router = express.Router();

router.post("/", createEvent);
router.post("/:eventId/draw", drawNames);

export default router;
