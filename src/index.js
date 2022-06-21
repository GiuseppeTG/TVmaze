import {
  loadComments,
  // addComment,
  // nameInput,
  // commentInput,
  displayModal,
} from './modules/functions.js';
import './style.css';
import './modal-styles.css';

// const form = document.querySelector('.submit-form');

// form.addEventListener('click', (e) => {
//   console.log('claedfdghjkl;jhgfdghjk');
//   addComment(nameInput.value, commentInput.value);
//   e.preventDefault();
// });

loadComments();

document.querySelector('.launchModal').addEventListener('click', () => {
  displayModal();
});
