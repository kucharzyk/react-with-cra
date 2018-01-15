import * as React from 'react';
import { StatelessComponent } from 'react';
import Button from 'material-ui/Button';

export interface Props {
  counter: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const Counter: StatelessComponent<Props> = (props) => (
  <div className="Counter">
    <h2>Count is: {props.counter}</h2>
    <div>
      <Button onClick={props.onDecrement}>-</Button>
      <Button onClick={props.onIncrement}>+</Button>
    </div>
  </div>
);

Counter.defaultProps = {
  onIncrement: () => {
    // no action
  },
  onDecrement: () => {
    // no action
  },
};

export default Counter;
