import * as React from 'react';
import AppFooter from './AppFooter';
import createShallow from 'material-ui/test-utils/createShallow';
import toJson from 'enzyme-to-json';

describe('AppFooter', () => {

  it('renders snapshot', () => {
    const shallowComponent = createShallow()(<AppFooter/>);
    expect(toJson(shallowComponent)).toMatchSnapshot();
  });

});
