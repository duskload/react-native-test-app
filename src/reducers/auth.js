import {
  LOGIN_USER,
  SUCCESS,
  LOADING,
  FAILURE,
  LOG_OUT,
  CLEAR_ERROR,
} from '../actions/constants';

const initialState = {
  error: '',
  isLoggedIn: false,
  isLoading: false,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER + LOADING:
      return { ...state, isLoading: true, error: '' };
    case LOGIN_USER + SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.payload,
        login: '',
        password: '',
      };
    case LOGIN_USER + FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: 'Password incorrect.',
      };
    case LOG_OUT:
      return { ...state, isLoggedIn: false };
    case CLEAR_ERROR:
      return { ...state, error: '' };
    default:
      return state;
  }
};
