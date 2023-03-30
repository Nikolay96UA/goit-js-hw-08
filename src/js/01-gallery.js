// Add imports above this line
import { galleryItems } from './gallery-items';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryBox = document.querySelector('.gallery');

const addGalleryEl = function (ArrItems) {
  return ArrItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`;
  }).join('');
};

const galleryRender = addGalleryEl(galleryItems);

galleryBox.insertAdjacentHTML('afterbegin', galleryRender);

galleryBox.addEventListener('click', onImgSlider);

function onImgSlider(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const lightbox = new simpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '250',
  });

  galleryBox.removeEventListener('click', onImgSlider);
}
