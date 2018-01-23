import * as React from 'react';
import About from './About';
import { shallow } from 'enzyme';

describe('About', () => {

  it('renders correctly', () => {
    const shallowComponent = shallow(<About/>);
    expect(shallowComponent).toMatchSnapshot();
  });

});
