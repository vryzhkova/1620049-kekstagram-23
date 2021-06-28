import {getRandomNumber} from './util.js';

const PHOTOS_COUNT = 25;

const NAMES = [
  'Артём',
  'Василий',
  'Юля',
  'Макс',
  'Света',
  'Геннадий',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Солнечный день',
  'Утро на море',
  'Спорт - это сила',
  'Отличный шоппинг',
  'Милый котик',
  'Прогулка в парке',
  'Люблю свою работу',
];

const getRandomArrayElement = (elements) => elements[_.random(0, elements.length - 1)];

const createComment = (id) => ({
  id: id,
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const createPhoto = (id) => {
  const countOfComments = getRandomNumber(1, 5);
  const comments = new Array(countOfComments).fill(null).map((comment, index) => createComment(index + 1));

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumber(15, 200),
    comments: comments,
  };
};

export function createPhotos () {
  return new Array(PHOTOS_COUNT).fill(null).map((photo, index) => createPhoto(index + 1));
}
