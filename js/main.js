import { drawingThumbnails } from './drawingThumbnails.js';
import './form.js';
import './changeScale.js';
import './applyEffect.js';
import { getData } from './api.js';
import { showAlert } from './util.js';

getData((photos) => {
  drawingThumbnails(photos);
}, () => {
  showAlert('Не удалось загрузить данные');
});
