const pictureTemplate = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');

export function drawingThumbnails (photos) {
  photos.forEach((photo) => {
    const photosElement = pictureTemplate.cloneNode(true);
    photosElement.querySelector('.picture__img').src = photo.url;
    photosElement.querySelector('.picture__likes').textContent = photo.likes;
    photosElement.querySelector('.picture__comments').textContent = photo.comments.length;

    // photosElement.querySelector('.picture').addEventListener('click', () => {
    //   createFullSizePhoto(photo);
    // });

    pictures.appendChild(photosElement);
  });
}


// домашка 7.2

// import { isEscEvent } from './util.js';

// export function createFullSizePhoto(picture) {
//   const bigPicture = document.querySelector('.big-picture');
//   const bigPictureImg = document.querySelector('.big-picture__img img');
//   const likesCount = document.querySelector('.likes-count');
//   const commentsCount = document.querySelector('.comments-count');
//   const bigPictureCancel = document.querySelector('.big-picture__cancel');
//   const body = document.querySelector('.body');

//   const closeModal = function () {
//     bigPictureCancel.addEventListener('click', () => {
//       bigPicture.classList.add('hidden');
//       isEscEvent();
//     });
//   };

//   closeModal();


//   bigPicture.classList.remove('hidden');
//   body.classList.add('modal.open');


//   bigPictureImg.src = picture.url;
//   likesCount.textContent = picture.textContent;
//   commentsCount.textContent = picture.textContent;
// }

