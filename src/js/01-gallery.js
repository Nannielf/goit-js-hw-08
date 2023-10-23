import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');
function markup(arr){
    return arr.map(({preview, original, description}) => `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('')
};
gallery.insertAdjacentHTML('afterbegin', markup(galleryItems));
gallery.style = 'list-style-type: none';
new SimpleLightbox('.gallery__item a', { captionsData: 'alt', captionDelay:250 });
console.log(galleryItems);
