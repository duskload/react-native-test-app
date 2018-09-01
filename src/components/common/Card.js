import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = ({ children }) => {
  return <View style={styles}>{children}</View>;
};

const styles = StyleSheet.create({
  marginLeft: 5,
  marginRight: 5,
  marginTop: 10
});

export default Card;