import { getTotalLikes, addLike } from './likes.js';
import displayModal from './modal.js';

const cardContainer = document.querySelector('.grid-container');

class UI {
  static renderCard = (title, imgUrl, itemID, summary) => {
   

    let likesCount = 0;
    //  getTotalLikes(itemID).then((data) => {
    //    likesCount = data;

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

      const likes = document.createElement('span');
      likes.classList.add('likes-counter');
      likes.textContent = likesCount;

      heart.addEventListener('click', () => {
        addLike(itemID).then((data) => data);
      });

      cardContainer.append(card);
      card.append(imageContainer, itemInfo, commentsButton);

      imageContainer.append(image);
      itemInfo.append(itemTitle, likesContainer);
      likesContainer.append(heart, likes);
    //});
  };
  
  static itemCounter = () => {
    let count = cardContainer.childElementCount;
    console.log(count);
    const itemCounter = document.querySelector('.item-counter');
    itemCounter.textContent = `Displaying ${count} shows:`;
  };
};

export default UI;
