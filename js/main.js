import { createPhotos } from './data.js';
import { drawingThumbnails } from './drawingThumbnails.js';
import './form.js';

const photos = createPhotos();

drawingThumbnails(photos);
