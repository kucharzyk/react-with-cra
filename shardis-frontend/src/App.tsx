import * as React from 'react';
import './App.css';
import ServerTime from './components/ServerTime';
import AppHeader from './components/AppHeader';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <ServerTime/>
      </div>
    );
  }
}

export default App;
