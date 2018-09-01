import React from 'react';
import { View } from 'react-native';

export default props => {
  return <View style={styles}>{props.children}</View>;
};

const styles = {
  marginLeft: 5,
  marginRight: 5,
  marginTop: 10
};
