import './style.css';
import searchedShows from './modules/search.js';
import getSomeShows from './modules/getSomeShows.js';

const form = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const cardContainer = document.querySelector('.grid-container');

// ----- SEARCH -----//

form.addEventListener('submit', () => {
  cardContainer.innerHTML = null;
  searchedShows(searchInput.value);
  searchInput.value = null;
});

// ----- INIT -----//

document.addEventListener('DOMContentLoaded', () => {
  getSomeShows();
});
