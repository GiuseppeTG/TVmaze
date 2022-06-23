import countDisplayElements from '../src/modules/itemCounter.js';

describe('Check item counter display the correct elements', () => {
  test('Check if the correct elements is displayed', () => {
    // if count is 2
    const count = 2;
    expect(countDisplayElements(count)).toBe('Displaying 2 shows:');
    expect(countDisplayElements(count)).not.toBeUndefined();
  });
});
