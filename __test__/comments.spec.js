import { getTotalComments } from '../src/modules/comments.js';

describe('Get Comment Count', () => {
  test('Item ID can be a Number', () => {
    // If no item id is passed to the function trow an error;

    const id = 123;
    // return false
    expect(getTotalComments(id)).toBeDefined();
  });

  test('Returns true when Item id is a string ', async () => {
    // if user pass in itemID of 12
    const id = '12';

    // return true
    expect(getTotalComments(id)).toBeDefined();
  });
});
