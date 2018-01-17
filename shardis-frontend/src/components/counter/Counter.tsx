import * as React from 'react';
import { StatelessComponent } from 'react';
import Button from 'material-ui/Button';

export interface Props {
  count: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const Counter: StatelessComponent<Props> = (props) => (
  <div className="Counter">
    <h2>Count is: {props.count}</h2>
    <div>
      <Button fab={true} color={'accent'} name="dec" onClick={props.onDecrement}>-</Button>
      <Button fab={true} color={'accent'} name="inc" onClick={props.onIncrement}>+</Button>
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
