import { createGalleryCard } from './js/render-functions';
import { fetchPictures } from './js/pixabay-api';

import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

const searchPicturesForm = document.querySelector('.search-picture-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const largePicture = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionsDelay: 250,
});

searchPicturesForm.addEventListener('submit', onSearchPictureFormSubmit);

async function onSearchPictureFormSubmit(event) {
  try {
    event.preventDefault();
    loader.classList.remove('is-hidden');

    const userQuery = searchPicturesForm.elements.user_query.value.trim();

    const { data } = await fetchPictures(userQuery);

    loader.classList.add('is-hidden');
    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      gallery.innerHTML = '';
      searchPicturesForm.reset();
      loader.classList.add('is-hidden');
      return;
    }

    const galleryCards = data.hits
      .map(imgInfo => createGalleryCard(imgInfo))
      .join('');

    gallery.innerHTML = galleryCards;
    largePicture.refresh();
    searchPicturesForm.reset();
  } catch (err) {
    console.log(err);
  }
}
