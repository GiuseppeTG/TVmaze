import displayModal from './modules/functions.js';
import './style.css';
import './modal-styles.css';

document.querySelector('.launchModal').addEventListener('click', () => {
  displayModal();
});

document.querySelector('.launchAnotherModal').addEventListener('click', () => {
  displayModal(
    'https://upload.wikimedia.org/wikipedia/commons/d/d4/Lydia-Forson.jpg',
    'Lydia mayaer',
    'QC6bnLUQwMT9GlJ8wh3Z',
    'Total',
    4556789,
    89,
    89,
  );
});
