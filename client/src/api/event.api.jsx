import api from "./axios";

export const createEvent = (name) => {
  return api.post("/events", { name });
};

export const drawEvent = (eventId) => {
  return api.post(`/events/${eventId}/draw`);
};
