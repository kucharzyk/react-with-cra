import * as React from 'react';
import * as ReactDOM from 'react-dom';

import NotFound from './NotFound';
import { create } from 'react-test-renderer';

describe('NotFound', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NotFound/>, div);
  });

  it('renders correctly', () => {
    const tree = create(<NotFound/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
