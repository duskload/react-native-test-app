import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Input from './controls/Input';
import Button from './controls/Button';

export default class LoginForm extends Component {
  handleLogin = () => { Actions.main(); };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome!</Text>
        <View style={styles.loginForm}>
          <Input iconName="user" placeholder="username" />
          <Input password iconName="lock" placeholder="password" />

          <Button onPress={this.handleLogin}>Log In</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 24
  },
  loginForm: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 20,
    alignItems: 'center',
    width: '100%'
  }
});
