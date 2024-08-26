export const createGalleryCard = cardInfo => {
  return `
    <li class="gallery-card">
  <a class="gallery-link" href="${cardInfo.largeImageURL}">
    <img class="gallery-image" src="${cardInfo.webformatURL}" alt="${cardInfo.tags}" />
  </a>

  <div class="info-box">
    <ul class="info-list">
      <li class="info-item">
        <h3 class="info-item-title">Likes</h3>
        <p class="info-item-value">${cardInfo.likes}</p>
      </li>
      <li class="info-item">
        <h3 class="info-item-title">Views</h3>
        <p class="info-item-value">${cardInfo.views}</p>
      </li>
      <li class="info-item">
        <h3 class="info-item-title">Comments</h3>
        <p class="info-item-value">${cardInfo.comments}</p>
      </li>
      <li class="info-item">
        <h3 class="info-item-title">Downloads</h3>
        <p class="info-item-value">${cardInfo.downloads}</p>
      </li>
    </ul>
  </div>
</li>
  `;
};
