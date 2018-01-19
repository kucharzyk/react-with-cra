import { applyMiddleware, createStore, Middleware } from 'redux';
import StoreState from './types/StoreState';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { isDev } from './env';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const getMiddleware: (() => Middleware[]) = () => {
  if (isDev) {
    const logger = createLogger({
      diff: true,
      collapsed: true
    });
    return [
      logger
    ];
  } else {
    return [];
  }
};

const store = createStore<StoreState>(reducers, composeWithDevTools(applyMiddleware(...getMiddleware())));

export default store;
