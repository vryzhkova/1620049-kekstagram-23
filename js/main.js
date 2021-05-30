// Первая функция

function getRandomNumber(min, max) {
  let temp;
  if (max <= min) {
    temp = min;
    min = max;
    max = temp;
  }
  if (min <= 0) {
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

getRandomNumber(0, 100);


// Вторая функция

function isValidString(string, maxLength) {
  return string.length <= maxLength;
}

isValidString('vika', 140);
