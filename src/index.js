import displayModal from './modules/functions.js';
import './style.css';
import './footer.css';
import './modal-styles.css';

document.querySelector('.launchAnotherModal').addEventListener('click', () => {
  displayModal(
    'https://upload.wikimedia.org/wikipedia/commons/d/d4/Lydia-Forson.jpg',
    'Lydia Mayer',
    'QC6bnLUQwMT9GlJ8wh3Z',
    'Total',
    4556789,
    89,
    89,
  );
});
