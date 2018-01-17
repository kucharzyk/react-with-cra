import * as React from 'react';
import { StatelessComponent } from 'react';
import Counter from './Counter';
import createShallow from 'material-ui/test-utils/createShallow';
import toJson from 'enzyme-to-json';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import StoreState from '../../types/StoreState';
import configureStore from 'redux-mock-store';

describe('Counter', () => {

  let WrappedComponent: StatelessComponent;

  beforeEach(() => {
    const mockStore = configureStore<StoreState>();
    const store = mockStore({
      counter: {
        count: 1
      }
    });

    WrappedComponent = () => (
      <Provider store={store}>
        <StaticRouter location={'/'} context={{}}>
          <Counter/>
        </StaticRouter>
      </Provider>
    );
  });

  it('renders snapshot', () => {
    const shallowComponent = createShallow({untilSelector: 'Counter'})(<WrappedComponent/>);
    expect(toJson(shallowComponent)).toMatchSnapshot();
  });

});
