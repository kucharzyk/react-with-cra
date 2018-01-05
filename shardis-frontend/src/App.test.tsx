import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import * as fetchMock from 'fetch-mock'

describe('App', () => {

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

    const div = document.createElement('div');

    ReactDOM.render(<App/>, div);
  });

});
