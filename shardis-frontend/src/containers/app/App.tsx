import * as React from 'react';
import { StatelessComponent } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import { Route, Router, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Reboot from 'material-ui/Reboot';
import AppLayout from '../app-layout/AppLayout';
import StoreState from '../../types/StoreState';
import { createStore } from 'redux';
import { counter } from '../../reducers';
import { Provider } from 'react-redux';
import createMuiTheme from 'material-ui/styles/createMuiTheme';

const theme = createMuiTheme();

const store = createStore<StoreState>(counter, {
  counter: 1
});

const App: StatelessComponent = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Reboot/>
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route path={'/'} component={AppLayout}/>
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App;
