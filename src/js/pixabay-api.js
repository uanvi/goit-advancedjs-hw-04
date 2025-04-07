import 'izitoast/dist/css/iziToast.min.css';

const baseSearchParams = {
  key: '49668141-9e36e21ab64203f58b46c2204',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export function fetchImages(searchQuery) {
  const searchParams = new URLSearchParams(baseSearchParams);
  searchParams.append('q', searchQuery);

  const url = `https://pixabay.com/api/?${searchParams}`;
  console.log('Request url is', url);

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(json => {
      return json.hits;
    });
}
