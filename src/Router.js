import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import Sidebar from './components/Sidebar';
import StackOverflow from './components/StackOverflow';
import LogOut from './components/LogOut';

import { Icon } from './components/common';

const DrawerIcon = () => <Icon name="bars" color="grey" />;

export default () => {
  return (
    <Router titleStyle={{ alignSelf: 'center', fontWeight: '200' }}>
      <Stack key="root" hideNavBar>
        <Scene key="auth" hideNavBar>
          <Scene key="login" component={LoginForm} />
          <Scene hideNavBar key="main">
            <Scene
              hideNavBar
              key="drawer"
              drawer
              drawerIcon={DrawerIcon}
              contentComponent={Sidebar}
              drawerPosition="left"
            >
              <Scene key="home" title="Home" component={HomePage} initial />
              <Scene key="stack" title="StackOverflow" component={StackOverflow} />
              <Scene key="logout" title="Log Out" component={LogOut} />
            </Scene>
          </Scene>
        </Scene>
      </Stack>
    </Router>
  );
};
