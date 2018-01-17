import * as React from 'react';
import { StatelessComponent } from 'react';

import AppLayout from './AppLayout';
import { StaticRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import StoreState from '../../types/StoreState';
import { Provider } from 'react-redux';
import createShallow from 'material-ui/test-utils/createShallow';
import toJson from 'enzyme-to-json';

describe('AppLayout', () => {

  let WrappedComponent: StatelessComponent;

  beforeEach(() => {

    const mockStore = configureStore<Partial<StoreState>>();
    const store = mockStore({});

    WrappedComponent = () => (
      <Provider store={store}>
        <StaticRouter location={'/'} context={{}}>
          <AppLayout/>
        </StaticRouter>
      </Provider>
    );
  });

  it('renders snapshot', () => {
    const shallowComponent = createShallow({untilSelector: 'AppLayout'})(<WrappedComponent/>);
    expect(toJson(shallowComponent)).toMatchSnapshot();
  });

});
