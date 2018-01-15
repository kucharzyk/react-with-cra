import * as React from 'react';
import { StatelessComponent } from 'react';
import App from './App';
import * as fetchMock from 'fetch-mock';
import createShallow from 'material-ui/test-utils/createShallow';
import toJson from 'enzyme-to-json';
import StoreState from '../../types/StoreState';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';

describe('App', () => {

  let WrappedComponent: StatelessComponent;

  beforeEach(() => {

    const mockStore = configureStore<StoreState>();
    const store = mockStore({
      counter: 1
    });

    WrappedComponent = () => (
      <Provider store={store}>
        <StaticRouter location={'/'} context={{}}>
          <App/>
        </StaticRouter>
      </Provider>
    );
  });

  it('renders without crashing', () => {

    fetchMock.reset();

    fetchMock.mock('/api/sample/date', {
      status: 200,
      body: new Date()
    });
    fetchMock.mock('/api/sample/datetime', {
      status: 200,
      body: new Date()
    });

    const shallowComponent = createShallow({untilSelector: 'App'})(<WrappedComponent/>);
    expect(toJson(shallowComponent)).toMatchSnapshot();
  });

});
