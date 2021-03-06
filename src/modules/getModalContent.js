/* eslint-disable import/no-cycle */
import Swal from 'sweetalert2';
import { fetchComments, addComment } from './comments.js';
import displayModal from './modal.js';

const getModalContent = (imgURL, name, summary, itemID) => {
  Swal.fire({
    html: `
      <div class="modal-container">
        <div class="modal-img-container">
          <img class="modal-img" src='${imgURL}' alt="modal" />
          </div>
          <h3 class="modal-header">${name}</h3>
        <div class="modal-detail-container">
          ${summary}
        </div>
        <div class="comments-container">
            <h3 class="comment-header">Comments<span id="total-comments"></span></h3>        
          <ul class="comments-list"></ul>
        </div>
        <div class="comment-form">
          <h3 class="form-header">Add a comment</h3>
          <form action="#" method="post" class="form">
            <input type="text" name="name" id="name" placeholder="Your name" class="name-input" required/>
            <textarea name="comment" required id="message" rows="4" placeholder="Your insights" class="textarea-input"></textarea>
            <input type="submit" value="Comment" class="btn comments-button" id="submit-form" />
          </form>
        </div>
    </div>
      `,
    showCloseButton: true,
  });

  fetchComments(itemID).then((data) => {
    document.getElementById('total-comments').innerHTML = ` (${data.length})`;
    if (data.length) {
      data.forEach((item) => {
        const li = document.createElement('li');
        li.className = 'comment';
        li.textContent = `${item.creation_date} ${item.username}: ${item.comment}`;
        document.querySelector('.comments-list').appendChild(li);
      });
    }
  });

  const nameInput = document.querySelector('#name');
  const commentInput = document.querySelector('#message');

  document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
    addComment(nameInput.value, commentInput.value, itemID).then(() => {
      Swal.close();
      displayModal(imgURL, name, itemID, summary);
    });
  });
};

export default getModalContent;
