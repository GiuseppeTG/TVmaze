import './style.css';
import './footer.css';
const AppId = 'ucRLpFwZl71GWbNyaaEC';
const url = 'https://api.tvmaze.com';



// -----CARD----- //

class UI {
  static renderCard = (imgUrl, title, likesCounter) => {
    imgUrl = 'https://static.tvmaze.com/uploads/images/medium_portrait/359/898433.jpg';
    title = 'Simpsons Simpsons Simpsons Simpsons'
    likesCounter = '123'

    const cardContainer = document.querySelector('.grid-container');

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

    cardContainer.append(card);
    card.append(imageContainer, itemInfo, commentsButton);
    
    imageContainer.append(image);
    itemInfo.append(itemTitle, likesContainer);
    likesContainer.append(heart, likes);
  }
}

UI.renderCard();
UI.renderCard();
UI.renderCard();
UI.renderCard();
UI.renderCard();
UI.renderCard();
