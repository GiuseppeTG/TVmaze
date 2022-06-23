import fetchMock from 'jest-fetch-mock';
import { getTotalComments } from '../modules/comments.js';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

describe('Get Comment Count', () => {
  test('Return true if item ID is a number', () => {
    // if User pass in a number id
    const id = 123;
    // return true
    expect(getTotalComments(id)).toBeDefined();
  });

  test('Returns true when Item id is a string ', async () => {
    // if user pass in a string ID
    const id = '12';

    // return true
    expect(getTotalComments(id)).toBeDefined();
  });

  test('If no data is found, return 0', async () => {
    // if user submit id and no data is found with that ID

    const id = 'hello_world_id';
    const data = await getTotalComments(id);

    // return 0
    expect(data).toBe(0);
  });
});
