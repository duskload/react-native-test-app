import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.button, this.props.style]} onPress={this.props.onPress}>
        <Text style={[styles.text, this.props.textStyle]}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node,
  textStyle: PropTypes.object
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1
  },
  text: {
    alignSelf: 'center',
    color: '#189ad3',
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  }
});
