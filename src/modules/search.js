import DisplayCard from './displayCard.js';
import { TV_API_URL } from './utils.js';

const searchedShows = async (query) => {
  const response = await fetch(`${TV_API_URL}/search/shows?q=${query}`);
  const data = await response.json();
  data.forEach((data) => {
    DisplayCard.renderCard(
      data.show.name,
      data.show.image.medium,
      data.show.id,
    );
    DisplayCard.renderCard(
      data.show.name,
      data.show.image.medium,
      data.show.id,
      data.show.summary,
    );
  });
};

export default searchedShows;
