import { Actions } from 'react-native-router-flux';
import {
  CHANGE_LOGIN,
  CHANGE_PASSWORD,
  SUCCESS,
  FAILURE,
  LOADING,
  LOGIN_USER,
  PASSWORD,
  LOG_OUT,
  CLEAR_ERROR
} from './constants';

export const changeLogin = payload => ({ type: CHANGE_LOGIN, payload });
export const changePassword = payload => dispatch => {
  dispatch(clearError());
  dispatch({ type: CHANGE_PASSWORD, payload });
};

export const clearError = () => ({ type: CLEAR_ERROR });

const checkPassword = password => password === PASSWORD;

export const loginUser = (login, password) => dispatch => {
  dispatch(showLoader(LOGIN_USER + LOADING));
  setTimeout(() => {
    const isPasswordCorrect = checkPassword(password);
    if (isPasswordCorrect) {
      const user = { login, password };
      dispatch(userLoginSuccess(user));
    } else {
      dispatch(userLoginFailure());
    }
  }, 1500);
};

export const userLoginSuccess = user => dispatch => {
  dispatch({ type: LOGIN_USER + SUCCESS, payload: user });
  Actions.main();
};

export const logOut = () => dispatch => {
  dispatch({ type: LOG_OUT });
  Actions.login();
};

export const userLoginFailure = () => ({ type: LOGIN_USER + FAILURE });

export const showLoader = type => ({ type });
