import {
  loadComments,
  addComment,
  nameInput,
  commentInput,
} from './modules/functions.js';
import './style.css';
import './modal-styles.css';

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  addComment(nameInput.value, commentInput.value);
  e.preventDefault();
});

loadComments();
