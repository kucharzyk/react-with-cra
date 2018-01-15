import * as React from 'react';

import NotFound from './NotFound';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('NotFound', () => {

  it('renders correctly', () => {
    const shallowComponent = shallow(<NotFound/>);
    expect(toJson(shallowComponent)).toMatchSnapshot();
  });

});
