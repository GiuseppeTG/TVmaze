import UI from './displayCard.js';
import { TV_API_URL } from './utils.js';

const searchedShows = async (query) => {
  const response = await fetch(`${TV_API_URL}/search/shows?q=${query}`);
  const data = await response.json();
  data.forEach((data) => {
    if (data.show.image !== null) {
      UI.renderCard(data.show.name, data.show.image.medium);
    }
  });
  UI.itemCounter();
};

export default searchedShows;
