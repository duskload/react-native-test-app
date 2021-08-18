import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AppIcon extends Component {
  static defaultProps = {
    size: 30,
    color: '#189ad3',
  };
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
  };
  render() {
    return (
      <Icon
        name={this.props.name}
        size={this.props.size}
        color={this.props.color}
      />
    );
  }
}
