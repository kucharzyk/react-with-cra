import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { create } from 'react-test-renderer';
import Counter from './Counter';

describe('Counter', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Counter counter={0}/>, div);
  });

  it('renders correctly', () => {
    const tree = create(<Counter counter={0}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
