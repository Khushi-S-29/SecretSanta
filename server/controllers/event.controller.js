import Event from "../models/Event.js";

export const createEvent = async (req, res) => {
  const { name} = req.body;
  const event= await Event.create({ name });
  res.status(201).json(event);
};
