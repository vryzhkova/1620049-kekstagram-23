export function getRandomNumber(min, max) {
  if (max <= min) {
    [min, max] = [max, min];
  }
  if (min <= 0) {
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}


export function isValidString(string, maxLength) {
  return string.length <= maxLength;
}

export function isEscEvent(evt) {
  return evt.key === 'Escape' || evt.key === 'Esc';
}
