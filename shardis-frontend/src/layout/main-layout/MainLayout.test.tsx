import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import MainLayout from './MainLayout';
import { Route, Router, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

describe('MainLayout', () => {

  const LayoutWithRouter = () => (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path={'/'} component={MainLayout}/>
      </Switch>
    </Router>
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
