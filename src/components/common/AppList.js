import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Content, List } from 'native-base';

const AppList = ({ children }) => {
  const { container, listContainer } = styles;
  return (
    <View style={container}>
      <View style={listContainer}>
        <Content>
          <List>{children}</List>
        </Content>
      </View>
    </View>
  );
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