import axios from 'axios';
import 'izitoast/dist/css/iziToast.min.css';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '49668141-9e36e21ab64203f58b46c2204';

const baseSearchParams = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export async function fetchImages(searchQuery) {
  try {
    const params = {
      ...baseSearchParams,
      q: searchQuery,
    };

    const response = await axios.get(API_URL, { params });
    console.log('Request URL:', response.config.url);

    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
