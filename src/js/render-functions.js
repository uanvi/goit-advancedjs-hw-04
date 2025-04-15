export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');

  images.forEach(image => {
    const imageCard = document.createElement('li');
    imageCard.classList.add('gallery-item');
    imageCard.innerHTML = `
      <a href="${image.largeImageURL}" >
        <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
        <ul class="image-statistic">
            <li class="image-statistic-item">
                <p class="image-statistic-item-title">Likes</p>
                <p class="image-statistic-item-value">${image.likes}</p>
            </li>
            <li class="image-statistic-item">
                <p class="image-statistic-item-title">Views</p>
                <p class="image-statistic-item-value">${image.views}</p>
            </li>
            <li class="image-statistic-item">
                <p class="image-statistic-item-title">Comments</p>
                <p class="image-statistic-item-value">${image.comments}</p>
            </li>
            <li class="image-statistic-item">
                <p class="image-statistic-item-title">Downloads</p>
                <p class="image-statistic-item-value">${image.downloads}</p>
            </li>

        </ul>
      </a>
    `;
    gallery.appendChild(imageCard);
  });
}
