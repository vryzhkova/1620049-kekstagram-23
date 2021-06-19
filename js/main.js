import { createPhotos } from './data.js';
import { drawingThumbnails } from './drawingThumbnails.js';

const photos = createPhotos();

drawingThumbnails(photos);
