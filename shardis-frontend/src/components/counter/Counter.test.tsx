import * as React from 'react';
import Counter from './Counter';
import createShallow from 'material-ui/test-utils/createShallow';
import toJson from 'enzyme-to-json';

describe('Counter', () => {

  it('renders snapshot', () => {
    const shallowComponent = createShallow()(<Counter counter={1}/>);
    expect(toJson(shallowComponent)).toMatchSnapshot();
  });

});
