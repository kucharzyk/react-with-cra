import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';

import AppHeader from './AppHeader';
import { create } from 'react-test-renderer';

describe('AppHeader', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppHeader/>, div);
  });

  it('renders correctly', () => {
    const tree = create(<AppHeader/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct text', () => {
    const hello = enzyme.shallow(<AppHeader/>);
    expect(hello.find('h2').text()).toEqual('Welcome to React');
  });

});
