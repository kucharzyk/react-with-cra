import { CounterAction } from '../actions';
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../constants';
import { Reducer } from 'redux';

export interface CounterState {
  readonly count: number;
}

const DEFAULT_STATE: CounterState = {
  count: 1
};

const counter: Reducer<CounterState> = (state: CounterState = DEFAULT_STATE, action: CounterAction) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {...state, count: state.count + 1};
    case DECREMENT_COUNTER:
      return {...state, count: Math.max(1, state.count - 1)};
    default:
      return state;
  }
};

export default counter;
