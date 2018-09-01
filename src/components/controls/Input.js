import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Input extends Component {
  static defaultProps = {
    password: false,
    placeholder: '',
    iconName: null
  };

  state = { value: '' };

  handleChange = ({ value }) => this.setState({ value });

  render() {
    const { iconName, placeholder } = this.props;
    return (
      <View style={styles.container}>
        {this.props.iconName && (
          <View style={styles.iconContainer}>
            <Icon name={iconName} size={30} color="#000" />
          </View>
        )}
        <TextInput
          secureTextEntry={this.props.password}
          style={styles.input}
          onChangeText={this.handleChange}
          value={this.state.value}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder={placeholder}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    padding: 5,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '75%'
  },
  text: {
    margin: 10,
    fontSize: 24
  },
  iconContainer: {
    marginRight: 5
  }
};
