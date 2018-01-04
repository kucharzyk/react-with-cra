import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Header from './Header';
import {create} from 'react-test-renderer';

describe('Header', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header/>, div);
  });

  it('renders correctly', () => {
    const tree = create(<Header/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
