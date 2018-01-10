import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { create } from 'react-test-renderer';
import Home from './Home';

describe('Home', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home/>, div);
  });

  it('renders correctly', () => {
    const tree = create(<Home/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
