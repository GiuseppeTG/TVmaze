import displayModal from './modules/functions.js';
import './style.css';
import './modal-styles.css';

document.querySelector('.launchModal').addEventListener('click', () => {
  displayModal(
    'https://cdn.cnn.com/cnnnext/dam/assets/200326122455-nima-ahmed-headshot-full-169.jpg',
    'Cecilia Kuma',
    'QC6bnLUQwMT9GlJ8wh3Z',
    'Ayarya',
    13456789,
    89,
    89,
  );
});

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
