import { combineReducers } from 'redux';
import StoreState from '../types/StoreState';
import counter from './counter';
import { routerReducer } from 'react-router-redux';

const reducers = combineReducers<StoreState>({
  counter: counter,
  router: routerReducer
});

export default reducers;
