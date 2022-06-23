/**
 * @jest-environment jsdom
 */

import UI from '../modules/displayCard';

test('counter of rendered items', () => {
  document.body.innerHTML = '<span class="item-counter"></span>'
    + '<div class="grid-container">'
    + ' <div class="card">...</div>'
    + ' <div class="card">...</div>'
    + ' <div class="card">...</div>'
    + '</div>';

  const itemCounter = document.querySelector('.item-counter');
  UI.itemCounter();
  expect(itemCounter.textContent).toBe('Displaying 3 shows:');
});