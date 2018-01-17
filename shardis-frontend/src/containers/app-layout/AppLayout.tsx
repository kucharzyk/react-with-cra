import * as React from 'react';
import { StatelessComponent } from 'react';
import withStyles from 'material-ui/styles/withStyles';
import { WithStyles } from 'material-ui';
import { StyleRulesCallback, Theme } from 'material-ui/styles';
import AppHeader from '../../components/app-header/AppHeader';
import AppFooter from '../../components/app-footer/AppFooter';
import AppRoutes from '../app-routes/AppRoutes';

const styles: StyleRulesCallback<'root'> = (theme: Theme) => ({
  root: {
    padding: theme.spacing.unit
  },
});

const AppLayout: StatelessComponent<{} & WithStyles<'root'>> = (props) => (
  <div className={props.classes.root}>
    <AppHeader/>
    <AppRoutes/>
    <AppFooter/>
  </div>
);

export default withStyles(styles)<{}>(AppLayout);
