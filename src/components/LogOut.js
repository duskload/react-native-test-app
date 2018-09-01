import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Button from './controls/Button';

export default class LogOut extends Component {
  handleLogOut = () => { Actions.login(); };
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.handleLogOut}>Log Out</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
