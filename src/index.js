import Swal from 'sweetalert2';
import {
  loadComments,
  addComment,
  nameInput,
  commentInput,
} from './modules/functions.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './modal-styles.css';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  addComment(nameInput.value, commentInput.value);
  e.preventDefault();
});

loadComments();

document.querySelector('.launchModal').addEventListener('click', () => {
  Swal.fire({
    title: '<strong>HTML <u>example</u></strong>',
    html: `
       <div class="model-container">
      <div class="modal-img-container">
        <img class="modal-img" src="https://media1.popsugar-assets.com/files/thumbor/gxKGFtqCmmY5v0qSTmLLrFYnPmQ/768x113:2266x1611/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/12/12/830/n/1922398/875274405df28d160209a5.52601179_/i/John-Legend.jpg" alt="modal" />
        <h3 class="modal-header">Space 3</h3>
      </div>
      <div class="modal-detail-container">
        <p class="detail">Fuel: titanium</p>
        <p class="detail">Light: 100,000</p>
        <p class="detail">Weight: 400</p>
        <p class="detail">Power: 100,000</p>
      </div>

      <div class="comments-container">
        <div class="comment-header-container">
          <h3 class="comment-header">Comments</h3>
          <span class="total">0</span>
        </div>
        <ul class="comments-list"></ul>
      </div>
      <div class="comment-form">
        <h3 class="form-header">Add a comment</h3>
        <form action="#" class="form">
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
          <input type="submit" value="Comment" class="btn" />
        </form>
      </div>
    </div>
      `,
    showCloseButton: true,
  });
});
