import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';

import { Input, Button, Spinner } from './common';
import { loginUser } from '../actions/auth';

function LoginForm({ navigation }) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const { error, isLoading } = auth;

  const { control, handleSubmit } = useForm();

  const onSubmit = ({ username, password }) => {
    dispatch(loginUser(username, password, navigation));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome!</Text>
      <View style={styles.loginForm}>
        <Controller
          name="username"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                onChangeText={onChange}
                value={value}
                iconName="user"
                placeholder="username"
              />
            );
          }}
        />

        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                iconName="lock"
                placeholder="password"
                secureTextEntry
                onChangeText={onChange}
                value={value}
              />
            );
          }}
        />

        <Text style={styles.errorCodeStyle}>{error}</Text>
        <View style={{ marginTop: 25 }}>
          {isLoading ? (
            <Spinner />
          ) : (
            <Button onPress={handleSubmit(onSubmit)}>Log In</Button>
          )}
        </View>
      </View>
    </View>
  );
}

LoginForm.propTypes = {
  login: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  loginUser: PropTypes.func,
  changePassword: PropTypes.func,
  changeLogin: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    marginBottom: 25,
    fontSize: 28,
  },
  loginForm: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  errorCodeStyle: {
    color: 'red',
    marginTop: 3,
  },
});

export default LoginForm;
