import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';

import { logOut } from '../actions/auth';

import { Button } from './common';

class LogOut extends Component {
  handleLogOut = () => this.props.logOut();
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.goodbye}>Good Bye</Text>
        </View>
        <Button onPress={this.handleLogOut} textStyle={{ color: '#000' }}>
          Log Out
        </Button>
      </View>
    );
  }
}

LogOut.propTypes = {
  logOut: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  goodbye: {
    fontSize: 38,
    color: 'grey',
    marginBottom: 50
  }
});

export default connect(
  null,
  { logOut }
)(LogOut);
