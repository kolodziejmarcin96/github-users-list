import { createStore } from 'redux';

import { rootReducer } from './reducer';

const configureStore = () => {
  return createStore(rootReducer);
};

export { AppState } from './reducer';

export const store = configureStore();
