import * as React from 'react';
import ServerTime from '../../server-time/ServerTime';
import Home from '../../home/Home';
import About from '../../about/About';
import NotFound from '../../not-found/NotFound';
import withStyles from 'material-ui/styles/withStyles';
import { WithStyles } from 'material-ui';
import { Theme } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import AppHeader from '../app-header/AppHeader';
import { Route, Switch } from 'react-router';

const styles = (theme: Theme) => ({
  root: {
    padding: theme.spacing.unit
  },
});

class MainLayout extends React.Component<{} & WithStyles<'root'>> {
  render() {
    return (
      <div className={this.props.classes.root}>
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

export default withStyles(styles)<{}>(MainLayout);
