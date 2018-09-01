import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Content, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Sidebar extends Component {
  render() {
    const { container, listContainer } = styles;
    return (
      <View style={container}>
        <View style={listContainer}>
          <Content>
            <List>
              <ListItem>
                <Text onPress={() => Actions.home()}>Home</Text>
              </ListItem>
              <ListItem>
                <Text onPress={() => Actions.stack()}>StackOverflow</Text>
              </ListItem>
              <ListItem>
                <Text onPress={() => Actions.logout()}>LogOut</Text>
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
    flex: 1,
    backgroundColor: '#fff'
  },
  listContainer: {
    flex: 2
  }
});
