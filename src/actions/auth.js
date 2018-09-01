import { Actions } from 'react-native-router-flux';
import {
  CHANGE_LOGIN,
  CHANGE_PASSWORD,
  SUCCESS,
  FAILURE,
  LOADING,
  LOGIN_USER,
  PASSWORD,
  LOG_OUT
} from './constants';

export const changeLogin = payload => ({ type: CHANGE_LOGIN, payload });
export const changePassword = payload => ({ type: CHANGE_PASSWORD, payload });

const checkPassword = password => password === PASSWORD;

export const loginUser = (login, password) => dispatch => {
  dispatch(showLoader());
  setTimeout(() => {
    const isPasswordCorrect = checkPassword(password);
    if (isPasswordCorrect) {
      dispatch(userLoginSuccess());
    } else {
      dispatch(userLoginFailure());
    }
  }, 2000);
};

export const userLoginSuccess = () => dispatch => {
  dispatch({ type: LOGIN_USER + SUCCESS });
  Actions.main();
};

export const logOut = () => ({ type: LOG_OUT });

export const userLoginFailure = () => ({ type: LOGIN_USER + FAILURE });

export const showLoader = () => ({ type: LOGIN_USER + LOADING });
