import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { Input, Button, Spinner } from './common';

import { loginUser, changePassword, changeLogin } from '../actions/auth';

class LoginForm extends Component {
  handleLogin = () => this.props.loginUser(this.props.login, this.props.password);
  onLoginChange = value => this.props.changeLogin(value);
  onPasswordChange = value => this.props.changePassword(value);

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome!</Text>
        <View style={styles.loginForm}>
          <Input
            iconName="user"
            placeholder="username"
            onChangeText={this.onLoginChange}
            value={this.props.login}
          />

          <Input
            iconName="lock"
            placeholder="password"
            secureTextEntry
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />

          <Text style={styles.errorCodeStyle}>{this.props.error}</Text>
          <View style={{ marginTop: 25 }}>
            {this.props.isLoading ? (
              <Spinner />
            ) : (
              <Button onPress={this.handleLogin}>Log In</Button>
            )}
          </View>
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
    marginBottom: 25,
    fontSize: 28
  },
  loginForm: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 20,
    alignItems: 'center',
    width: '100%'
  },
  errorCodeStyle: {
    color: 'red',
    marginTop: 3
  }
});

const mapStateToProps = state => {
  return {
    login: state.auth.login,
    password: state.auth.password,
    error: state.auth.error,
    isLoading: state.auth.isLoading
  };
};

export default connect(
  mapStateToProps,
  { loginUser, changePassword, changeLogin }
)(LoginForm);
