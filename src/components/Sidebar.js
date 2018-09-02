import React, { Component } from 'react';
import AppList from './common/AppList';
import { Text } from 'react-native';
import { ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Sidebar extends Component {
  render() {
    return (
      <AppList>
        <ListItem>
          <Text onPress={() => Actions.home()}>Home</Text>
        </ListItem>
        <ListItem>
          <Text onPress={() => Actions.stack()}>StackOverflow</Text>
        </ListItem>
        <ListItem>
          <Text onPress={() => Actions.logout()}>LogOut</Text>
        </ListItem>
      </AppList>
    );
  }
}
