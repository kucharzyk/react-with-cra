import * as React from 'react';
import { StatelessComponent } from 'react';
import AppRoutes from './AppRoutes';
import createShallow from 'material-ui/test-utils/createShallow';
import toJson from 'enzyme-to-json';
import StoreState from '../../types/StoreState';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import configureStore from 'redux-mock-store';

describe('AppRoutes', () => {

  let WrappedComponent: StatelessComponent;

  beforeEach(() => {
    const mockStore = configureStore<Partial<StoreState>>();
    const store = mockStore({});

    WrappedComponent = () => (
      <Provider store={store}>
        <StaticRouter location={'/'} context={{}}>
          <AppRoutes/>
        </StaticRouter>
      </Provider>
    );
  });

  it('renders snapshot', () => {
    const shallowComponent = createShallow({untilSelector: 'AppRoutes'})(<WrappedComponent/>);
    expect(toJson(shallowComponent)).toMatchSnapshot();
  });

});
