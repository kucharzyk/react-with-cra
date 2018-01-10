import * as React from 'react';
import ServerTime from '../../server-time/ServerTime';
import AppHeader from '../app-header/AppHeader';
import Home from '../../home/Home';
import About from '../../about/About';

import { Affix, Breadcrumb, Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../../not-found/NotFound';
import AppMenu from '../app-menu/AppMenu';

const {Content, Footer} = Layout;

class MainLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Layout>
          <AppHeader/>
          <AppMenu/>
          <Content style={{margin: '0 10px'}}>
            <Affix>
              <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>App</Breadcrumb.Item>
                <Breadcrumb.Item>location</Breadcrumb.Item>
              </Breadcrumb>
            </Affix>
            <div className="MainLayout" style={{padding: 10, background: '#fff', minHeight: 360}}>
              <Switch>
                <Route path={'/'} exact={true} component={Home}/>
                <Route path={'/home'} component={Home}/>
                <Route path={'/about'} component={About}/>
                <Route path={'/time'} component={ServerTime}/>
                <Route component={NotFound}/>
              </Switch>
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>Shardis ©2018</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
