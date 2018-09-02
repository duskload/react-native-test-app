import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { logOut } from '../actions/auth';
import Button from './common/Button';

class LogOut extends Component {
  handleLogOut = () => this.props.logOut();
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

export default connect(
  null,
  { logOut }
)(LogOut);
