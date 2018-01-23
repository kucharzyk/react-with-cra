import * as React from 'react';
import { StatelessComponent } from 'react';
import Home from './Home';
import StoreState from '../../types/StoreState';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import createShallow from 'material-ui/test-utils/createShallow';

describe('Home', () => {

  let WrappedComponent: StatelessComponent;

  beforeEach(() => {

    const mockStore = configureStore<Partial<StoreState>>();
    const store = mockStore({});

    WrappedComponent = () => (
      <Provider store={store}>
        <StaticRouter location={'/'} context={{}}>
          <Home/>
        </StaticRouter>
      </Provider>
    );
  });

  it('renders snapshot', () => {
    const shallowComponent = createShallow({untilSelector: 'Home'})(<WrappedComponent/>);
    expect(shallowComponent).toMatchSnapshot();
  });

});
