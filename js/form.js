import { isEscEvent, isValidString } from './util.js';

const uploadFile = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('.body');
const uploadCancel = document.querySelector('#upload-cancel');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const re = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;

uploadFile.addEventListener('change', () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
});

const closeModal = function () {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  uploadOverlay.value = '';
  textHashtags.value = '';
  textDescription.value = '';
};

uploadCancel.addEventListener('click', () => {
  closeModal();
});

body.addEventListener('keydown', (evt) => {
  if (document.activeElement !== textDescription &&  document.activeElement !== textHashtags ) {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeModal();
    }
  }
});

// Хэш-теги

textHashtags.addEventListener('input', () => {
  const hashtags = textHashtags.value.trim().split(' ');
  if (hashtags.length > 5) {
    textHashtags.setCustomValidity('Нельзя указать больше пяти хэш-тегов');
  } else {
    textHashtags.setCustomValidity('');
  }

  hashtags.forEach((hashtag) => {
    if (re.test(hashtag)) {
      const dublicates = hashtags.filter((dublicate) => dublicate.toLowerCase() === hashtag.toLowerCase());
      if (dublicates.length >= 2) {
        textHashtags.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды');
      } else {
        textHashtags.setCustomValidity('');
        textHashtags.style.border = 'none';
      }
    } else {
      textHashtags.setCustomValidity('Невалидный хэштег');
      textHashtags.style.border = '2px solid red';
    }
  });

  textHashtags.reportValidity();
});

// Комментарий

textDescription.addEventListener('input', () => {
  if (isValidString(textDescription.value, 140) === false) {
    textDescription.setCustomValidity('Длина комментария не может составлять больше 140 символов');
    textDescription.style.border = '2px solid red';
  } else {
    textDescription.setCustomValidity('');
    textDescription.style.border = 'none';
  }
  textDescription.reportValidity();
});
