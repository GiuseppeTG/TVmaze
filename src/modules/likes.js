import axios from 'axios';
import { BASE_URL, APP_ID } from './utils.js';

const addLike = async (itemID) => {
  if (itemID) {
    const newLike = {
      item_id: itemID,
      likes: 1,
    };

    await axios.post(`${BASE_URL}/${APP_ID}/likes`, newLike);
    return true;
  }
  return false;
};

const getTotalLikes = async (itemID) => {
  const response = await fetch(`${BASE_URL}/${APP_ID}/likes`);
  const data = await response.json();
  const results = data.find((item) => +item.item_id === +itemID);
  return results === undefined ? 0 : results.likes;
};

export { addLike, getTotalLikes };
