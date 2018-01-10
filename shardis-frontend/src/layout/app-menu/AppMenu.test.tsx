import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import { StaticRouter } from 'react-router';
import AppMenu from './AppMenu';

describe('AppMenu', () => {

  const AppMenuWithRouter = () => (
    <StaticRouter location={'/'} context={{}}>
      <AppMenu/>
    </StaticRouter>
  );

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppMenuWithRouter/>, div);
  });

  it('renders correctly', () => {
    const tree = create(<AppMenuWithRouter/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
