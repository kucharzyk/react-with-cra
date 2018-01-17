import { createStore } from 'redux';
import { counter } from './reducers';
import StoreState from './types/StoreState';

const store = createStore<StoreState>(counter, {
  counter: 1
});

export default store;
