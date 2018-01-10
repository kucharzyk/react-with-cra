import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import { Route, Router, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import MainLayout from '../main-layout/MainLayout';

describe('AppMenu', () => {

  const AppMenuWithRouter = () => (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path={'/'} component={MainLayout}/>
      </Switch>
    </Router>
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
