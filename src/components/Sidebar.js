import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Content, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Sidebar extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        
        <View style={{ flex: 2}}>
        <Content>
          <List>
            <ListItem>
              <Text onPress={() => Actions.home()}>
                Home
              </Text>
            </ListItem>
            <ListItem>
              <Text onPress={() => Actions.stack()}>
                StackOverflow
              </Text>
            </ListItem>
            <ListItem>
              <Text onPress={() => Actions.logout()}>
                LogOut
              </Text>
            </ListItem>
          </List>
        </Content>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  welcome: {
    fontSize: 24
  }
});
