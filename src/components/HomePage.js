import React, { Component } from 'react';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 24
  }
});

const mapStateToProps = state => {
  return {
    login: state.auth.login
  };
};

export default connect(
  mapStateToProps,
  null
)(HomePage);
