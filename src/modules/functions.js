import axios from 'axios';

const totalInput = document.querySelector('.total');
const commentsListContainer = document.querySelector('.comments-list');
const nameInput = document.querySelector('#name');
const commentInput = document.querySelector('#message');

const BaseURL =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const APP_ID = 'QC6bnLUQwMT9GlJ8wh3Z';

const loadComments = async () => {
  const { data } = await axios.request({
    method: 'get',
    url: `${BaseURL}/${APP_ID}/comments?item_id=${APP_ID}`,
  });

  // set the total to the length of the list
  totalInput.innerHTML = data.length;

  // map the list as li on screen
  data.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'comment';

    li.textContent = `${item.creation_date} ${item.username}: ${item.comment}`;
    commentsListContainer.appendChild(li);
  });
};

const addComment = async (name, comment, item_id = APP_ID) => {
  if (name && comment) {
    const newComment = {
      item_id,
      username: `${name}`,
      comment: `${comment}`,
    };

    await axios.post(`${BaseURL}/${APP_ID}/comments`, newComment);
    commentsListContainer.innerHTML = '';
    nameInput.value = '';
    commentInput.value = '';
    loadComments();

    return true;
  }
  return false;
};

export { loadComments, addComment, nameInput, commentInput };
