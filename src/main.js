import { createGalleryCard } from './js/render-functions';
import { fetchPictures } from './js/pixabay-api';

import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

const searchPicturesForm = document.querySelector('.search-picture-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load-more-btn');

let currentPage = 1;
let userQuery = '';

const largePicture = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionsDelay: 250,
});

searchPicturesForm.addEventListener('submit', onSearchPictureFormSubmit);
loadMore.addEventListener('click', onLoadMoreClick);

async function onSearchPictureFormSubmit(event) {
  try {
    event.preventDefault();
    loader.classList.remove('is-hidden');

    userQuery = searchPicturesForm.elements.user_query.value.trim();
    currentPage = 1;

    const { data } = await fetchPictures(userQuery, currentPage);

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
      loadMore.classList.add('is-hidden');
      return;
    }

    const galleryCards = data.hits
      .map(imgInfo => createGalleryCard(imgInfo))
      .join('');

    gallery.innerHTML = galleryCards;
    largePicture.refresh();
    searchPicturesForm.reset();

    loadMore.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
  }
}

async function onLoadMoreClick(event) {
  try {
    currentPage++;

    const { data } = await fetchPictures(userQuery, currentPage);

    const galleryCards = data.hits
      .map(imgInfo => createGalleryCard(imgInfo))
      .join('');

    gallery.insertAdjacentHTML('beforeend', galleryCards);
    largePicture.refresh();
    smoothScroll();

    const totalPage = data.totalHits / 15;
    if (currentPage >= totalPage) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });

      loadMore.classList.add('is-hidden');
    }
  } catch (err) {
    console.log(err);
  }
}

function smoothScroll() {
  const galleryCard = document.querySelector('.gallery-card');
  const galleryCardHeight = galleryCard.getBoundingClientRect().height;

  window.scrollBy({
    top: galleryCardHeight * 2,
    behavior: 'smooth',
  });
}
