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
const commentCount = document.querySelector('.social__comment-count--js');
const commentsLoader = document.querySelector('.comments-loader');

const COMMENTS_LOAD_STEP = 5;

function removeComments() {
  Array.from(commentsList.children).forEach((child) => {
    child.remove();
  });
}

function createComments(comments, commentsLength) {
  const commentsListFragment = document.createDocumentFragment();
  const startComments = comments.slice(0, commentsLength);
  commentCount.textContent = startComments.length; //  socialCommentCount.firstChild.textContent = `${renderedCommentsLength} из  `;

  if (startComments.length === comments.length) {
    commentsLoader.classList.add('hidden');
  }

  startComments.forEach((comment) => {
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
}

function hideModal() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  commentsLoader.classList.remove('hidden');
}

const onEscHideModal = (evt) => {
  if (isEscEvent(evt)){
    evt.preventDefault();
    hideModal();
    body.removeEventListener('keydown', onEscHideModal);
  }
};


export function createFullSizePhoto(picture) {
  openModal();

  bigPictureImg.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  socialCaption.textContent = picture.description;

  let commentsSize = COMMENTS_LOAD_STEP;

  createComments(picture.comments, commentsSize);

  function loadMoreComments() {
    commentsSize = commentsSize + COMMENTS_LOAD_STEP;
    createComments(picture.comments, commentsSize);
  }

  commentsLoader.addEventListener('click', loadMoreComments);
  bigPictureCancel.addEventListener('click', () => {
    hideModal();
    commentsLoader.removeEventListener('click', loadMoreComments);
  });

  body.addEventListener('keydown', onEscHideModal);
  body.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      commentsLoader.removeEventListener('click', loadMoreComments);
    } }, { once: true });
}
