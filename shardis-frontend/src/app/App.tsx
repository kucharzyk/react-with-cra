import * as React from 'react';
import './App.css';
import createBrowserHistory from 'history/createBrowserHistory';
import { Route, Router, Switch } from 'react-router-dom';
import MainLayout from '../layout/main-layout/MainLayout';
import createMuiTheme from 'material-ui/styles/createMuiTheme';
import indigo from 'material-ui/colors/indigo';
import blue from 'material-ui/colors/blue';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Reboot from 'material-ui/Reboot';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: blue,
  },
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Reboot/>
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route path={'/'} component={MainLayout}/>
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
