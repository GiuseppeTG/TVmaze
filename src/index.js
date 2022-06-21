import { loadComments, displayModal } from './modules/functions.js';
import './style.css';
import './modal-styles.css';

loadComments();

document.querySelector('.launchModal').addEventListener('click', () => {
  displayModal();
});
