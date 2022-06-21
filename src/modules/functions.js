import axios from 'axios';
import Swal from 'sweetalert2';

const BaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const APP_ID = 'QC6bnLUQwMT9GlJ8wh3Z';

const addComment = async (name, comment, item_id = APP_ID) => {
  if (name && comment) {
    const newComment = {
      item_id,
      username: `${name}`,
      comment: `${comment}`,
    };

    await axios.post(`${BaseURL}/${APP_ID}/comments`, newComment);
    return true;
  }
  return false;
};

const getModalContent = (
  imgURL,
  name,
  fuel,
  weight,
  light,
  power,
  totalComments,
  itemID,
) => {
  Swal.fire({
    html: `
       <div class="model-container">
      <div class="modal-img-container">
        <img class="modal-img" src='${imgURL}' alt="modal" />
        <h3 class="modal-header">${name}</h3>
      </div>
      <div class="modal-detail-container">
        <p class="detail">Fuel: ${fuel}</p>
        <p class="detail">Light: ${light}</p>
        <p class="detail">Weight: ${weight}</p>
        <p class="detail">Power: ${power}</p>
      </div>

      <div class="comments-container">
        <div class="comment-header-container">
          <h3 class="comment-header">Comments</h3>
          <span class="total">${totalComments}</span>
        </div>
        <ul class="comments-list"></ul>
      </div>
      <div class="comment-form">
        <h3 class="form-header">Add a comment</h3>
        <form action="#" method="post" class="form">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            class="name-input"
            required
          />
          <textarea
            name="comment"
            required
            id="message"
            rows="4"
            placeholder="Your insights"
            class="textarea-input"
          ></textarea>
          <input type="submit" value="Comment" class="btn" id="submit-form" />
        </form>
      </div>
    </div>
      `,
    showCloseButton: true,
  });

  document.querySelector('.comments-list').innerHTML = '<p>Alfred is here</p>';
  const nameInput = document.querySelector('#name');
  const commentInput = document.querySelector('#message');

  document.querySelector('.form').addEventListener('submit', (e) => {
    addComment(nameInput.value, commentInput.value, itemID);
    e.preventDefault();
    Swal.close();
  });
};

const fetchComments = async (itemID) => {
  const response = await fetch(
    `${BaseURL}/${APP_ID}/comments?item_id=${itemID}`,
  );
  const data = await response.json();
  return data;
};

const getTotalComments = async (itemID) => {
  const response = await fetch(
    `${BaseURL}/${APP_ID}/comments?item_id=${itemID}`,
  );
  const data = await response.json();
  return data.length;
};

const displayModal = (imgURL, name, itemID, fuel, weight, light, power) => {
  // get total comments for one item
  let totalComments = 0;
  getTotalComments(itemID).then((data) => {
    totalComments = data;

    // append inside then
    // fethch comments for one item
    fetchComments(itemID).then((data) => {
      data.forEach((item) => {
        const li = document.createElement('li');
        li.className = 'comment';
        li.textContent = `${item.creation_date} ${item.username}: ${item.comment}`;
      });

      // dynamically display the content of the modal
      getModalContent(
        imgURL,
        name,
        fuel,
        weight,
        light,
        power,
        totalComments,
        itemID,
      );
    });
  });
};

export default displayModal;