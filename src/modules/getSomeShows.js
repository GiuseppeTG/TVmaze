import { TV_API_URL } from './utils.js';
import DisplayCard from './displayCard.js';

const getSomeShows = async () => {
  const response = await fetch(`${TV_API_URL}/show`);
  const data = await response.json();
  const someShows = data.slice(0, 9);
  someShows.forEach((data) => {
    DisplayCard.renderCard(data.name, data.image.medium, data.id, data.summary);
  });
};

export default getSomeShows;
