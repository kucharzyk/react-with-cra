import * as React from 'react';
import AppFooter from './AppFooter';
import createShallow from 'material-ui/test-utils/createShallow';

describe('AppFooter', () => {

  it('renders snapshot', () => {
    const shallowComponent = createShallow()(<AppFooter/>);
    expect(shallowComponent).toMatchSnapshot();
  });

});
