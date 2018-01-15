import * as constants from '../constants';

export interface IncrementCounter {
  type: constants.INCREMENT_COUNTER;
}

export interface DecrementCounter {
  type: constants.DECREMENT_COUNTER;
}

export type CounterAction = IncrementCounter | DecrementCounter;

export function incrementCounter(): IncrementCounter {
  return {
    type: constants.INCREMENT_COUNTER
  };
}

export function decrementCounter(): DecrementCounter {
  return {
    type: constants.DECREMENT_COUNTER
  };
}
