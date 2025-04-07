import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const galleryList = document.querySelector('.gallery');
const loaderEl = document.querySelector('.js-loader');

const lightboxInstance = new SimpleLightbox('.gallery a');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = input.value.trim();
  if (!query) return;

  loaderEl.classList.remove('hidden');

  try {
    const images = await fetchImages(query);
    galleryList.innerHTML = '';

    if (images.length === 0) {
      showErrorMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }

    renderGallery(images);
    lightboxInstance.refresh();
  } catch (error) {
    galleryList.innerHTML = '';
    showErrorMessage('Oops! Something went wrong.');
    console.error(error);
  } finally {
    loaderEl.classList.add('hidden');
  }
});

function showErrorMessage(message) {
  iziToast.show({
    message,
    messageColor: 'white',
    position: 'topRight',
    backgroundColor: '#ef4040',
  });
}
