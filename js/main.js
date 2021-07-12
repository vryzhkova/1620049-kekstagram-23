import { renderPhotos } from './renderPhotos.js';
import './form.js';
import './changeScale.js';
import './applyEffect.js';
import { getPhotos } from './api.js';
import { showAlert } from './util.js';
import { showFilter, setFilterDiscussedClick, setFilterDefaultClick, setFilterRandomClick } from './filter.js';
import { debounce } from './utils/debounce.js';

const RERENDER_DELAY = 500;

function sortByCommentsLength(photos) {
  return photos.slice().sort((left, right) => right.comments.length - left.comments.length);
}

function randomTenPhotos(photos) {
  return photos.slice().sort(() => Math.random() - 0.5).slice(0, 10);
}

getPhotos((photos) => {
  showFilter();
  renderPhotos(photos);

  setFilterDefaultClick(debounce(() => renderPhotos(photos), RERENDER_DELAY));
  setFilterDiscussedClick(debounce(() => renderPhotos(sortByCommentsLength(photos)), RERENDER_DELAY));
  setFilterRandomClick(debounce(() => renderPhotos(randomTenPhotos(photos)), RERENDER_DELAY));
}, () => {
  showAlert('Не удалось загрузить данные');
});
