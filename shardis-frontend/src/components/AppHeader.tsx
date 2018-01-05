import * as React from 'react';
import { StatelessComponent } from 'react';
import './AppHeader.css';

const logo = require('./logo.svg');

const AppHeader: StatelessComponent = () => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
    <h2>Welcome to React</h2>
  </div>
);

export default AppHeader;
