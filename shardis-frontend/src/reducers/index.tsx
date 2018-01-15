import { CounterAction } from '../actions';
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../constants';
import StoreState from '../types/StoreState';

export function counter(state: StoreState, action: CounterAction): StoreState {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {...state, counter: state.counter + 1};
    case DECREMENT_COUNTER:
      return {...state, counter: Math.max(1, state.counter - 1)};
    default:
      return state;
  }
}
