import { applyMiddleware, createStore, Middleware } from 'redux';
import StoreState from './types/StoreState';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

const getMiddleware: (() => Middleware[]) = () => {
  return [];
};

const store = createStore<StoreState>(reducer, composeWithDevTools(applyMiddleware(...getMiddleware())));

export default store;
