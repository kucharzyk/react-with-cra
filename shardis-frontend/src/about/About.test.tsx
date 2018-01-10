import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { create } from 'react-test-renderer';
import About from './About';

describe('About', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<About/>, div);
  });

  it('renders correctly', () => {
    const tree = create(<About/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
