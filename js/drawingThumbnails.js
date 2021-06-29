import { createFullSizePhoto } from './fullSizePhoto.js';

const pictureTemplate = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');

export function drawingThumbnails (photos) {
  photos.forEach((photo) => {
    const photosElement = pictureTemplate.cloneNode(true);
    photosElement.querySelector('.picture__img').src = photo.url;
    photosElement.querySelector('.picture__likes').textContent = photo.likes;
    photosElement.querySelector('.picture__comments').textContent = photo.comments.length;

    photosElement.querySelector('.picture').addEventListener('click', () => {
      createFullSizePhoto(photo);
    });

    pictures.appendChild(photosElement);
  });
}
