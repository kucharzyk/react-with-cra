import * as React from 'react';
import { StatelessComponent } from 'react';
import { StyleRulesCallback, Theme } from 'material-ui/styles';
import withStyles from 'material-ui/styles/withStyles';
import { WithStyles } from 'material-ui';
import AppHeader from '../../components/app-header/AppHeader';
import AppRoutes from '../app-routes/AppRoutes';
import AppFooter from '../../components/app-footer/AppFooter';

const styles: StyleRulesCallback<'root'> = (theme: Theme) => ({
  root: {
    padding: theme.spacing.unit
  },
});

const App: StatelessComponent<{} & WithStyles<'root'>> = (props) => (
  <div className={props.classes.root}>
    <AppHeader/>
    <AppRoutes/>
    <AppFooter/>
  </div>
);

export default withStyles(styles)<{}>(App);
