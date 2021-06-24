import { createPhotos } from './data.js';
import { drawingThumbnails, createFullSizePhotos } from './drawingThumbnails.js';
import './form.js';


const photos = createPhotos();

drawingThumbnails(photos);

createFullSizePhotos();
