import { combineReducers } from 'redux';
import StoreState from './types/StoreState';
import counter from './reducers/counter';

const reducer = combineReducers<StoreState>({
  counter: counter
});

export default reducer;
