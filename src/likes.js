import axios from 'axios';

const BaseURL =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const APP_ID = 'un4IMXxgYWzcZxzqDkPT';

const addLike = async (itemID) => {
  console.log('i was called ', itemID);
  if (itemID) {
    const newLike = {
      item_id: itemID,
      likes: 1,
    };

    await axios.post(`${BaseURL}/${APP_ID}/likes`, newLike);
    return true;
  }
  return false;
};

const getTotalLikes = async (itemID) => {
  const response = await fetch(`${BaseURL}/${APP_ID}/likes`);
  const data = await response.json();
  const results = data.find((item) => +item.item_id === +itemID);
  return results === undefined ? 0 : results.likes;
};

export { addLike, getTotalLikes };
