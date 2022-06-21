import displayModal from './modules/functions.js';
import './style.css';
import './footer.css';
import './modal-styles.css';

// const AppId = 'ucRLpFwZl71GWbNyaaEC';
const ApiUrl = 'https://api.tvmaze.com';
const form = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const cardContainer = document.querySelector('.grid-container');

// -----CARD----- //

class UI {
  static renderCard = (title, imgUrl, itemID, likesCounter = '123') => {
    const card = document.createElement('div');
    card.classList.add('card');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const image = document.createElement('img');
    image.classList.add('item-img');
    image.src = imgUrl;

    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');

    const itemTitle = document.createElement('h2');
    itemTitle.classList.add('item-title');
    itemTitle.innerText = title;

    const likesContainer = document.createElement('div');
    likesContainer.classList.add('likes-container');

    const heart = document.createElement('i');
    heart.classList.add('fa-solid', 'fa-heart');

    const likes = document.createElement('span');
    likes.classList.add('likes-counter');
    likes.textContent = likesCounter;

    const commentsButton = document.createElement('button');
    commentsButton.classList.add('comments-button');
    commentsButton.textContent = 'Comments';
    commentsButton.addEventListener('click', () => {
      displayModal(imgUrl, title, itemID, 'Total', 4556789, 89, 89);
    });

    cardContainer.append(card);
    card.append(imageContainer, itemInfo, commentsButton);

    imageContainer.append(image);
    itemInfo.append(itemTitle, likesContainer);
    likesContainer.append(heart, likes);
  };
}

// ----- API FUNCTIONS -----//

const getSearchedShows = async (query) => {
  const response = await fetch(`${ApiUrl}/search/shows?q=${query}`);
  const data = await response.json();
  data.forEach((TvShow) =>
    UI.renderCard(TvShow.show.name, TvShow.show.image.medium, TvShow.show.id)
  );
};

const getSomeShows = async () => {
  const response = await fetch(`${ApiUrl}/show`);
  const data = await response.json();
  const someShows = data.slice(0, 9);
  someShows.forEach((show) =>
    UI.renderCard(show.name, show.image.medium, show.id)
  );
};

// ----- SEARCH -----//

form.addEventListener('submit', () => {
  cardContainer.innerHTML = null;
  getSearchedShows(searchInput.value);
  searchInput.value = null;
});

// ----- INIT -----//

document.addEventListener('DOMContentLoaded', () => {
  getSomeShows();
});
