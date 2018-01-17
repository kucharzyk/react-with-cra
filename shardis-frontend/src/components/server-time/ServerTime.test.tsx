import * as React from 'react';
import { StatelessComponent } from 'react';
import * as fetchMock from 'fetch-mock';
import createShallow from 'material-ui/test-utils/createShallow';
import StoreState from '../../types/StoreState';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import ServerTime from './ServerTime';

describe('ServerTime', () => {

  let WrappedComponent: StatelessComponent;

  beforeEach(() => {

    const mockStore = configureStore<Partial<StoreState>>();
    const store = mockStore({});

    WrappedComponent = () => (
      <Provider store={store}>
        <StaticRouter location={'/'} context={{}}>
          <ServerTime/>
        </StaticRouter>
      </Provider>
    );
  });

  it('renders without crashing', () => {

    fetchMock.reset();

    fetchMock.mock('/api/sample/date', {
      status: 200,
      body: new Date('1410-07-15')
    });

    fetchMock.mock('/api/sample/datetime', {
      status: 200,
      body: new Date('1410-07-15T12:00:00.000Z')
    });

    const shallowComponent = createShallow({untilSelector: 'ServerTime'})(<WrappedComponent/>);

    shallowComponent.update();

    expect(fetchMock.calls().matched.length).toBe(2);

  });

});
