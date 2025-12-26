import shuffle from "../utils/shuffle.js";
import validateAssignment from "../utils/validateAssignment.js";

const MAX_ATTEMPTS = 100;

export function generateAssignments(participants) {
  let attempts = 0;

  while (attempts < MAX_ATTEMPTS) {
    const shuffled = shuffle(participants);
    if (validateAssignment(participants, shuffled)) {
      return participants.map((santa, i) => ({
        santa,
        receiver: shuffled[i],
      }));
    }
    attempts++;
  }
  throw new Error("Unable to generate valid assignments");
}
