import axios from 'axios';
import { BASE_URL, APP_ID } from './utils.js';

const addComment = async (name, comment, itemID) => {
  if (name && comment) {
    const newComment = {
      item_id: itemID,
      username: `${name}`,
      comment: `${comment}`,
    };

    await axios.post(`${BASE_URL}/${APP_ID}/comments`, newComment);
    return true;
  }
  return false;
};

const fetchComments = async (itemID) => {
  const response = await fetch(
    `${BASE_URL}/${APP_ID}/comments?item_id=${itemID}`,
  );
  const data = await response.json();
  return data.length ? data : [];
};

const getTotalComments = async (itemID) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${APP_ID}/comments?item_id=${itemID}`,
    );
    const data = await response.json();
    return data.length === undefined ? 0 : data.length;
  } catch (error) {
    return 0;
  }
};

export { getTotalComments, fetchComments, addComment };
