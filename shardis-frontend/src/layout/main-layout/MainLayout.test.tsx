import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import MainLayout from './MainLayout';
import { StaticRouter } from 'react-router-dom';

describe('MainLayout', () => {

  const LayoutWithRouter = () => (
    <StaticRouter location={'/'} context={{}}>
      <MainLayout/>
    </StaticRouter>
  );

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LayoutWithRouter/>, div);
  });

  it('renders correctly', () => {
    const tree = create(<LayoutWithRouter/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
