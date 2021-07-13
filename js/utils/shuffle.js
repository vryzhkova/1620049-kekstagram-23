export function shuffle (array) {
  const arrayCopy = array.slice();
  for (let idx = arrayCopy.length - 1; idx > 0; idx--) {
    const index = Math.floor(Math.random() * (idx + 1));
    const current = arrayCopy[idx];
    const toSwap = arrayCopy[index];
    arrayCopy[idx] = toSwap;
    arrayCopy[index] = current;
  }
  return arrayCopy;
}
