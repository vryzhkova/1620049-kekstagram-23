import { createPhotos } from './data.js';
import { drawingThumbnails } from './drawingThumbnails.js';
import './form.js';
import './changeScale.js';
import './applyEffect.js';


const photos = createPhotos();

drawingThumbnails(photos);

