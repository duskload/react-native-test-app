import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  button: {
    marginTop: 20,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1
  },
  text: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  }
};
