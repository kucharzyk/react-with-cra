import * as React from 'react';
import { StatelessComponent } from 'react';
import withStyles from 'material-ui/styles/withStyles';
import { WithStyles } from 'material-ui';
import { StyleRulesCallback, Theme } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

const styles: StyleRulesCallback<'root'> = (theme: Theme) => ({
  root: {
    textAlign: 'center',
    padding: theme.spacing.unit
  },
});

const AppFooter: StatelessComponent<{} & WithStyles<'root'>> = (props) => (
  <Paper className={props.classes.root}>Shardis ©2018</Paper>
);

export default withStyles(styles)<{}>(AppFooter);
