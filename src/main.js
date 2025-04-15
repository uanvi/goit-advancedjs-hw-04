import { fetchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('#search-input');
const galleryList = document.querySelector('.gallery');
const loaderEl = document.querySelector('.js-loader');
const loadMoreBtn = document.querySelector('.load-more-btn');

const lightbox = new SimpleLightbox('.gallery a');

const searchParams = {
  query: '',
  page: 1,
  perPage: 15,
};

form.addEventListener('submit', async event => {
  event.preventDefault();

  const trimmedQuery = input.value.trim().toLowerCase();
  if (!trimmedQuery) return;

  searchParams.query = trimmedQuery;
  searchParams.page = 1;

  loaderEl.classList.remove('hidden');
  loadMoreBtn.classList.add('hidden');
  galleryList.innerHTML = '';

  try {
    const images = await fetchImages(searchParams);

    if (images.length === 0) {
      showErrorMessage('No images found. Please try a different query.');
      return;
    }

    renderGallery(images); // replaces content
    lightbox.refresh();

    if (images.length === searchParams.perPage) {
      loadMoreBtn.classList.remove('hidden');
    }
  } catch (error) {
    showErrorMessage('Oops! Something went wrong.');
    console.error(error);
  } finally {
    loaderEl.classList.add('hidden');
  }
});

loadMoreBtn.addEventListener('click', async () => {
  searchParams.page += 1;
  loaderEl.classList.remove('hidden');

  try {
    const newImages = await fetchImages(searchParams);

    if (newImages.length === 0) {
      loadMoreBtn.classList.add('hidden');
      return;
    }

    renderGallery(newImages); // appends to existing content
    lightbox.refresh();

    if (newImages.length < searchParams.perPage) {
      loadMoreBtn.classList.add('hidden');
    }
  } catch (error) {
    showErrorMessage('Failed to load more images.');
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
