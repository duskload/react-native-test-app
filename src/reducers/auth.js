import {
  LOGIN_USER,
  CHANGE_LOGIN,
  CHANGE_PASSWORD,
  SUCCESS,
  LOADING,
  FAILURE
} from '../actions/constants';

const initialState = {
  login: '',
  password: '',
  error: '',
  isLoggedIn: false,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return { ...state, login: action.payload };
    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    case LOGIN_USER + LOADING:
      return { ...state, isLoading: true, error: '' };
    case LOGIN_USER + SUCCESS:
      return { ...state, isLoading: false, isLoggedIn: true };
    case LOGIN_USER + FAILURE:
      return { ...state, isLoading: false, isLoggedIn: false, error: 'Password incorrect.' };
    default:
      return state;
  }
};
