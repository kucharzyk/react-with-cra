import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'typeface-roboto-multilang/latin-ext.css';
import App from './containers/app/App';
import store from './store';
import theme from './theme';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Reboot from 'material-ui/Reboot';
import { Route, Switch } from 'react-router';
import history from './history';
import { ConnectedRouter } from 'react-router-redux';

ReactDOM.render(
  (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Reboot/>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path={'/'} component={App}/>
          </Switch>
        </ConnectedRouter>
      </MuiThemeProvider>
    </Provider>
  ),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
