import * as React from 'react';
import { StatelessComponent } from 'react';
import * as enzyme from 'enzyme';

import AppHeader from './AppHeader';
import { StaticRouter } from 'react-router';
import toJson from 'enzyme-to-json';
import createShallow from 'material-ui/test-utils/createShallow';

describe('AppHeader', () => {

  let WrappedComponent: StatelessComponent;

  beforeEach(() => {
    WrappedComponent = () => (
      <StaticRouter location={'/'} context={{}}>
        <AppHeader/>
      </StaticRouter>
    );
  });

  it('renders snapshot', () => {
    const shallowComponent = createShallow({untilSelector: 'AppHeader'})(<WrappedComponent/>);
    expect(toJson(shallowComponent)).toMatchSnapshot();
  });

  it('renders the correct text', () => {
    const component = enzyme.render(<WrappedComponent/>);
    expect(component.find('.app-title').text()).toEqual('Welcome to React');
  });

});
