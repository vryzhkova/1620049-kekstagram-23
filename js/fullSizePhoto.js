import { isEscEvent } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const bigPictureCancel = document.querySelector('.big-picture__cancel');
const body = document.querySelector('.body');

const commentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');
const socialCaption = document.querySelector('.social__caption');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

function removeComments() {
  Array.from(commentsList.children).forEach((child) => {
    child.remove();
  });
}

function createComments(comments) {
  const commentsListFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;

    commentsListFragment.appendChild(commentElement);
  });

  removeComments();

  commentsList.appendChild(commentsListFragment);
}

function openModal() {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
}

function hideModal() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
}


export function createFullSizePhoto(picture) {
  openModal();

  bigPictureCancel.addEventListener('click', () => {
    hideModal();
  });


  body.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)){
      evt.preventDefault();
      hideModal();
    }
  });

  bigPictureImg.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  socialCaption.textContent = picture.description;

  createComments(picture.comments);
}
