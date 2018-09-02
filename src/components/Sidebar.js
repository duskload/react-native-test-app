import React, { Component } from 'react';
import AppList from './common/AppList';
import { ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const sidebarData = [
  { title: 'Home', onPress: () => Actions.home() },
  { title: 'StackOverflow', onPress: () => Actions.stack() },
  { title: 'LogOut', onPress: () => Actions.logout() }
];

export default class Sidebar extends Component {
  render() {
    return (
      <AppList>
        {sidebarData.map(item => (
          <ListItem key={item.title} onPress={item.onPress} title={item.title} hideChevron />
        ))}
      </AppList>
    );
  }
}
