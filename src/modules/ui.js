import { addLike, getTotalLikes } from './likes.js';
import displayModal from './modal.js';

class UI {
  static renderCard = (title, imgUrl, itemID, summary) => {
    const cardContainer = document.querySelector('.grid-container');
    let likesCount = 0;
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

    const commentsButton = document.createElement('button');
    commentsButton.classList.add('comments-button');
    commentsButton.textContent = 'Comments';
    commentsButton.addEventListener('click', () => {
      displayModal(imgUrl, title, itemID, summary);
    });

    heart.addEventListener('click', (e) => {
      
      addLike(itemID).then(() => {
        const likes = e.target.nextElementSibling;
        likes.textContent = '';
        getTotalLikes(itemID).then((data) => {
          likesCount = data;
          likes.classList.add('likes-counter');
          likes.textContent = likesCount;
          likesContainer.append(likes);
        });
      }) 
    });

    cardContainer.append(card);
    card.append(imageContainer, itemInfo, commentsButton);

    imageContainer.append(image);
    itemInfo.append(itemTitle, likesContainer);
    likesContainer.append(heart);

    getTotalLikes(itemID).then((data) => {
      likesCount = data;
      const likes = document.createElement('span');
      likes.classList.add('likes-counter');
      likes.textContent = '';
      likes.textContent = likesCount;
      likesContainer.append(likes);
    });
  };

  static itemCounter = () => {
    const cardContainer = document.querySelector('.grid-container');
    const count = cardContainer.childElementCount;
    const itemCounter = document.querySelector('.item-counter');
    itemCounter.textContent = `Displaying ${count} shows:`;
  };
}

export default UI;
