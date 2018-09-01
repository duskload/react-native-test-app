import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import AppIcon from './Icon';

const Input = ({ secureTextEntry, onChangeText, value, placeholder, iconName }) => {
  return (
    <View style={styles.container}>
      {iconName && (
        <View style={styles.iconContainer}>
          <AppIcon name={iconName} size={30} color="#000" />
        </View>
      )}
      <TextInput
        secureTextEntry={secureTextEntry}
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Input;
