import api from "./axios";

export const addParticipant = (data) => {
  return api.post("/participants", data);
};
