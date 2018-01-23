import * as React from 'react';

import NotFound from './NotFound';
import { shallow } from 'enzyme';

describe('NotFound', () => {

  it('renders correctly', () => {
    const shallowComponent = shallow(<NotFound/>);
    expect(shallowComponent).toMatchSnapshot();
  });

});
