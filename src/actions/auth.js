import {
  SUCCESS,
  FAILURE,
  LOADING,
  LOGIN_USER,
  PASSWORD,
  LOG_OUT,
  CLEAR_ERROR,
} from './constants';
import { ScreenNames } from '../Router';

export const clearError = () => ({ type: CLEAR_ERROR });

const checkPassword = password => password === PASSWORD;

export const loginUser = (login, password, navigation) => dispatch => {
  dispatch(showLoader(LOGIN_USER + LOADING));
  setTimeout(() => {
    const isPasswordCorrect = checkPassword(password);
    if (isPasswordCorrect) {
      const user = { login, password };
      dispatch(userLoginSuccess(user));
      navigation.navigate(ScreenNames.Main, { screen: ScreenNames.Home });
    } else {
      dispatch(userLoginFailure());
    }
  }, 1500);
};

export const userLoginSuccess = user => dispatch => {
  dispatch({ type: LOGIN_USER + SUCCESS, payload: user });
};

export const logOut = navigation => dispatch => {
  dispatch({ type: LOG_OUT });
  navigation.navigate(ScreenNames.Login);
};

export const userLoginFailure = () => ({ type: LOGIN_USER + FAILURE });

export const showLoader = type => ({ type });
