import * as React from 'react';
import { StatelessComponent } from 'react';
import App from './App';
import createShallow from 'material-ui/test-utils/createShallow';
import toJson from 'enzyme-to-json';
import StoreState from '../../types/StoreState';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

describe('App', () => {

  let WrappedComponent: StatelessComponent;

  beforeEach(() => {

    const mockStore = configureStore<Partial<StoreState>>();
    const store = mockStore({});
    WrappedComponent = () => (
      <Provider store={store}>
        <StaticRouter location={'/'} context={{}}>
          <App/>
        </StaticRouter>
      </Provider>
    );
  });

  it('renders snapshot', () => {
    const shallowComponent = createShallow({untilSelector: 'App'})(<WrappedComponent/>);
    expect(toJson(shallowComponent)).toMatchSnapshot();
  });

});
