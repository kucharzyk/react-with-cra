import * as React from 'react';
import ServerTime from '../../server-time/ServerTime';
import AppHeader from '../app-header/AppHeader';
import Home from '../../home/Home';
import About from '../../about/About';

import { Route, Switch } from 'react-router-dom';
import NotFound from '../../not-found/NotFound';
import Paper from 'material-ui/Paper';

class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <AppHeader/>
        <Paper>
          <Switch>
            <Route path={'/'} exact={true} component={Home}/>
            <Route path={'/home'} component={Home}/>
            <Route path={'/about'} component={About}/>
            <Route path={'/time'} component={ServerTime}/>
            <Route component={NotFound}/>
          </Switch>
        </Paper>
        <Paper style={{textAlign: 'center'}}>Shardis ©2018</Paper>
      </div>
    );
  }
}

export default MainLayout;
