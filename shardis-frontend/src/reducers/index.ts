import { combineReducers } from 'redux';
import StoreState from '../types/StoreState';
import counter from './counter';

const reducers = combineReducers<StoreState>({
  counter: counter
});

export default reducers;
