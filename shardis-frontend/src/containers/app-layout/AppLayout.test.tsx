import * as React from 'react';
import { StatelessComponent } from 'react';
import * as ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';

import AppLayout from './AppLayout';
import { StaticRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import StoreState from '../../types/StoreState';
import { Provider } from 'react-redux';

describe('AppLayout', () => {

  let WrappedComponent: StatelessComponent;

  beforeEach(() => {

    const mockStore = configureStore<StoreState>();
    const store = mockStore({
      counter: 1
    });

    WrappedComponent = () => (
      <Provider store={store}>
        <StaticRouter location={'/'} context={{}}>
          <AppLayout/>
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
