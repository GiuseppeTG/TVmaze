/**
 * @jest-environment jsdom
 */

import UI from '../modules/ui.js';

describe('counter of items rendered', () => {
  test('test 1', () => {
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

  test('test 2', () => {
    document.body.innerHTML = '<span class="item-counter"></span>'
      + '<div class="grid-container">'
      + ' <div class="card">...</div>'
      + ' <div class="card">...</div>'
      + '</div>';

    const itemCounter = document.querySelector('.item-counter');
    UI.itemCounter();
    expect(itemCounter.textContent).toBe('Displaying 2 shows:');
  });
});
