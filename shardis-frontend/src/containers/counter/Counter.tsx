import { connect, Dispatch } from 'react-redux';
import StoreState from '../../types/StoreState';
import Counter from '../../components/counter/Counter';
import * as actions from '../../actions/';

export function mapStateToProps({counter}: StoreState) {
  return {
    count: counter.count
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.CounterAction>) {
  return {
    onIncrement: () => {
      dispatch(actions.incrementCounter());
    },
    onDecrement: () => {
      dispatch(actions.decrementCounter());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
