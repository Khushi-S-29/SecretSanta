export default function validateAssignment(santas, receivers) {
  for (let i = 0; i < santas.length; i++) {
    if (santas[i]._id.toString() === receivers[i]._id.toString()) {
      return false;
    }
  }
  return true;
}
