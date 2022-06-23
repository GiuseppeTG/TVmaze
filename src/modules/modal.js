/* eslint-disable import/no-cycle */
import getModalContent from './getModalContent.js';

const displayModal = (imgURL, name, itemID, summary) => {
  getModalContent(imgURL, name, summary, itemID);
};

export default displayModal;
