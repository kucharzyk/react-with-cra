import * as React from 'react';
import { StatelessComponent } from 'react';
import { Layout } from 'antd';

import './AppHeader.css';

const logo = require('./logo.svg');

const AppHeader: StatelessComponent = () => (
  <Layout.Header style={{padding: 0}}>
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" style={{float: 'left'}}/>
      <h2 style={{float: 'left'}}>Welcome to React</h2>
      <div style={{clear: 'both'}}/>
    </div>
  </Layout.Header>
);

export default AppHeader;
