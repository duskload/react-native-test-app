import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class HomePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{`Hello, ${this.props.login}`}!</Text>
      </View>
    );
  }
}

HomePage.propTypes = {
  login: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 28
  }
});

const mapStateToProps = state => {
  return {
    login: state.auth.user.login
  };
};

export default connect(
  mapStateToProps,
  null
)(HomePage);
