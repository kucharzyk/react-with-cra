import * as React from 'react';
import { StatelessComponent } from 'react';

import * as ReactDOM from 'react-dom';

import { create } from 'react-test-renderer';
import Home from './Home';
import StoreState from '../../types/StoreState';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

describe('Home', () => {

  let WrappedComponent: StatelessComponent;

  beforeEach(() => {
    const mockStore = configureStore<StoreState>();
    const store = mockStore({
      counter: 1
    });

    WrappedComponent = () => (
      <Provider store={store}>
        <StaticRouter location={'/'} context={{}}>
          <Home/>
        </StaticRouter>
      </Provider>
    );
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WrappedComponent/>, div);
  });

  it('renders correctly', () => {
    const tree = create(<WrappedComponent/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
