import {
  LOGIN_USER,
  CHANGE_LOGIN,
  CHANGE_PASSWORD,
  SUCCESS,
  LOADING,
  FAILURE,
  LOG_OUT
} from '../actions/constants';

const initialState = {
  login: '',
  password: '',
  error: '',
  isLoggedIn: false,
  isLoading: false,
  user: null
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
      return { ...state, isLoading: false, isLoggedIn: true, user: action.payload };
    case LOGIN_USER + FAILURE:
      return { ...state, isLoading: false, isLoggedIn: false, error: 'Password incorrect.' };
    case LOG_OUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};
