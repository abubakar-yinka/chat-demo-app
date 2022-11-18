import { store } from '../configureStore';

describe('configureStore', () => {
  it('should return an empty store', () => {
    expect(store.getState()).toBeUndefined();
  });
});
