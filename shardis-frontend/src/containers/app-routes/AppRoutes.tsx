import * as React from 'react';
import { StatelessComponent } from 'react';
import ServerTime from '../../components/server-time/ServerTime';
import Home from '../../components/home/Home';
import About from '../../components/about/About';
import NotFound from '../../components/not-found/NotFound';
import withStyles from 'material-ui/styles/withStyles';
import { WithStyles } from 'material-ui';
import { StyleRulesCallback, Theme } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import { Route, Switch } from 'react-router';

const styles: StyleRulesCallback<'root'> = (theme: Theme) => ({
  root: {
    padding: theme.spacing.unit
  },
});

const AppRoutes: StatelessComponent<{} & WithStyles<'root'>> = (props) => (
  <Paper className={props.classes.root}>
    <Switch>
      <Route path={'/'} exact={true} component={Home}/>
      <Route path={'/home'} component={Home}/>
      <Route path={'/about'} component={About}/>
      <Route path={'/time'} component={ServerTime}/>
      <Route component={NotFound}/>
    </Switch>
  </Paper>
);

export default withStyles(styles)<{}>(AppRoutes);
