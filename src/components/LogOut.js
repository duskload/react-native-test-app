import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { logOut } from '../actions/auth';

import { Button } from './common';

function LogOut({ navigation }) {
  const dispatch = useDispatch()

  const onLogOut = () => {
    dispatch(logOut(navigation));
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.goodbye}>Good Bye</Text>
      </View>
      <Button onPress={onLogOut} textStyle={{ color: '#000' }}>
        Log Out
      </Button>
    </View>
  );
}

LogOut.propTypes = {
  logOut: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  goodbye: {
    fontSize: 38,
    color: 'grey',
    marginBottom: 50,
  },
});

export default LogOut
