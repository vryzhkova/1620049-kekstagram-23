const pictureTemplate = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');

export function drawingThumbnails (photos) {
  photos.forEach((photo) => {
    const photosElement = pictureTemplate.cloneNode(true);
    photosElement.querySelector('.picture__img').src = photo.url;
    photosElement.querySelector('.picture__likes').textContent= photo.likes;
    photosElement.querySelector('.picture__comments').textContent = photo.comments.length;
    pictures.appendChild(photosElement);
  });
}


// домашка 7.2


export function createFullSizePhotos () {

  const bigPicture = document.querySelector('.big-picture');
  const pictures_ = document.querySelectorAll('.picture');
  const bigPictureImg = document.querySelector('.big-picture__img');


  pictures_.forEach((picture) => {
    picture.addEventListener('click', () => {
      bigPicture.classList.remove('hidden');
      bigPictureImg.src = picture.url;

    });
  });
}

// const createFullSizePhotos = () => {
//   bigPicture.addEventListener('click', () => {
//     bigPicture.classList.remove('hidden');
//   },

//   );};
