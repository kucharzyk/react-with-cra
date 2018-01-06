import * as React from 'react';
import './App.css';
import ServerTime from './components/ServerTime';
import AppHeader from './components/AppHeader';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import { Button } from 'antd';
import { Link, Route, Router, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>

        <Router history={createBrowserHistory()}>
          <div>
            <div>
              <Link to={'/'}><Button>Start Page</Button></Link>
              <Link to={'/home'}><Button>Home</Button></Link>
              <Link to={'/about'}><Button>About</Button></Link>
              <Link to={'/404'}><Button>404</Button></Link>
            </div>
            <Switch>
              <Route path={'/'} exact={true} component={ServerTime}/>
              <Route path={'/home'} component={Home}/>
              <Route path={'/about'} component={About}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
