import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import AppFooter from './AppFooter';

describe('AppFooter', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppFooter/>, div);
  });

  it('renders correctly', () => {
    const tree = create(<AppFooter/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
