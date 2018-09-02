import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View } from 'react-native';
import { List } from 'react-native-elements';

const AppList = ({ children }) => {
  const { container, listContainer } = styles;
  return (
    <View style={container}>
      <View style={listContainer}>
        <List>{children}</List>
      </View>
    </View>
  );
};

AppList.propTypes = {
  children: PropTypes.node
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  listContainer: {
    flex: 2
  }
});

export default AppList;
