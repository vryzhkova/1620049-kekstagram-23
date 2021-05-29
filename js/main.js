function randomNumber(min, max) {
  if (min < 0) {
    min = 0;
  }
  if (max <= min) {
    max = min + 1;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

randomNumber(0, 100);

function stringLength(string, maxLength) {
  if (string.length > maxLength) {
    return false;
  } else {
    return true;
  }
}

stringLength("vika", 140);
