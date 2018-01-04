import * as React from 'react';
import './App.css';
import ServerTime from './components/ServerTime';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ServerTime/>
      </div>
    );
  }
}

export default App;
