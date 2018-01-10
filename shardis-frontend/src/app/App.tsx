import * as React from 'react';
import './App.css';
import createBrowserHistory from 'history/createBrowserHistory';
import { Route, Router, Switch } from 'react-router-dom';
import MainLayout from '../layout/main-layout/MainLayout';

class App extends React.Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route path={'/'} component={MainLayout}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
