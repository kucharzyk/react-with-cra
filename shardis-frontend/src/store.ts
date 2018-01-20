import { applyMiddleware, createStore, Middleware } from 'redux';
import StoreState from './types/StoreState';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { isDev } from './env';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import { routerMiddleware } from 'react-router-redux';
import history from './history';

const getMiddleware: (() => Middleware[]) = () => {
  const middleware = [routerMiddleware(history)];
  if (isDev) {
    middleware.push(createLogger({
      diff: true,
      collapsed: true
    }));
  }
  return middleware;
};

export const store = createStore<StoreState>(reducers, composeWithDevTools(applyMiddleware(...getMiddleware())));

export default store;
