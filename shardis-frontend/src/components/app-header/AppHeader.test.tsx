import * as React from 'react';
import { StatelessComponent } from 'react';
import * as ReactDOM from 'react-dom';
import * as enzyme from 'enzyme';

import AppHeader from './AppHeader';
import { create } from 'react-test-renderer';
import { StaticRouter } from 'react-router';

describe('AppHeader', () => {

  let WrappedComponent: StatelessComponent;

  beforeEach(() => {
    WrappedComponent = () => (
      <StaticRouter location={'/'} context={{}}>
        <AppHeader/>
      </StaticRouter>
    );
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WrappedComponent/>, div);
  });

  it('renders correctly', () => {
    const tree = create(<WrappedComponent/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct text', () => {
    const header = enzyme.render(<WrappedComponent/>);
    expect(header.find('.app-title').text()).toEqual('Welcome to React');
  });

});
