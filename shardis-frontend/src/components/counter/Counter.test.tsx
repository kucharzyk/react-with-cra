import * as React from 'react';
import Counter from './Counter';
import createShallow from 'material-ui/test-utils/createShallow';
import toJson from 'enzyme-to-json';
import 'jest-enzyme';

describe('Counter', () => {

  it('renders snapshot', () => {
    const shallowComponent = createShallow()(<Counter count={1}/>);
    expect(toJson(shallowComponent)).toMatchSnapshot();
  });

  it('works as expected', () => {
    const incFunction = jest.fn();
    const decFunction = jest.fn();
    const shallowComponent = createShallow()(
      (
        <Counter
          count={1}
          onIncrement={incFunction}
          onDecrement={decFunction}
        />
      )
    );

    expect(shallowComponent.find('h2')).toHaveText('Count is: 1');

    shallowComponent.setProps({count: 42});

    expect(shallowComponent.find('h2')).toHaveText('Count is: 42');

    expect(incFunction).not.toBeCalled();
    expect(decFunction).not.toBeCalled();

    shallowComponent.find('[name="inc"]').simulate('click');

    expect(incFunction).toBeCalled();
    expect(decFunction).not.toBeCalled();

    shallowComponent.find('[name="dec"]').simulate('click');

    expect(incFunction).toBeCalled();
    expect(decFunction).toBeCalled();
  });

});
