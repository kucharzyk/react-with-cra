import * as React from 'react';
import { StatelessComponent } from 'react';

const logo = require('./logo.svg');

const Header: StatelessComponent = () => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
    <h2>Welcome to React</h2>
  </div>
);

export default Header;
