import * as React from 'react';
import About from './About';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('About', () => {

  it('renders correctly', () => {
    const shallowComponent = shallow(<About/>);
    expect(toJson(shallowComponent)).toMatchSnapshot();
  });

});
