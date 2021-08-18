import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View, ActivityIndicator } from 'react-native';

const Spinner = ({ size, style }) => {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

Spinner.propTypes = {
  size: PropTypes.string,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spinner;
