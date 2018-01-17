import * as React from 'react';
import { StatelessComponent } from 'react';

import './AppHeader.css';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Tabs, { Tab } from 'material-ui/Tabs';
import { RouteComponentProps, withRouter } from 'react-router';
import Hidden from 'material-ui/Hidden';
import { StyleRulesCallback, Theme } from 'material-ui/styles';
import withStyles from 'material-ui/styles/withStyles';
import { WithStyles } from 'material-ui';

const logo = require('./logo.svg');

const styles: StyleRulesCallback<'root'> = (theme: Theme) => ({
  root: {},
});

const getActiveMenuIndex = (pathname: string) => {
  if (pathname.startsWith('/404')) {
    return 4;
  } else if (pathname.startsWith('/time')) {
    return 3;
  } else if (pathname.startsWith('/about')) {
    return 2;
  } else if (pathname.startsWith('/home')) {
    return 1;
  } else {
    return 0;
  }
};

const AppHeader: StatelessComponent<RouteComponentProps<{}> & WithStyles<'root'>> = (props) => (
  <div className="App-header">
    <AppBar position="static" color="default">
      <Toolbar>
        <img src={logo} className="App-logo" alt="logo"/>
        <Typography type="title" color="inherit">
          <span className="app-title">Welcome to React</span>
        </Typography>
        <Hidden smDown={true}>
          <Tabs value={getActiveMenuIndex(props.location.pathname)} style={{marginLeft: '1em'}}>
            <Tab label="Main Page" onClick={() => props.history.push('/')}/>
            <Tab label="Home" onClick={() => props.history.push('/home')}/>
            <Tab label="About" onClick={() => props.history.push('/about')}/>
            <Tab label="Time" onClick={() => props.history.push('/time')}/>
            <Tab label="404" onClick={() => props.history.push('/404')}/>
          </Tabs>
        </Hidden>
      </Toolbar>
    </AppBar>
  </div>
);

export default withRouter(withStyles(styles)(AppHeader));
