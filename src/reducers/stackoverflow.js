import {
  LOAD_STACKOVERFLOW_DATA_RESPONSE,
  LOAD_STACKOVERFLOW_DATA_REQUEST,
  LOAD_STACKOVERFLOW_DATA_ERROR
} from '../actions/constants';

const initialState = {
  data: null,
  error: '',
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STACKOVERFLOW_DATA_REQUEST:
      return { ...state, isLoading: true, error: '' };
    case LOAD_STACKOVERFLOW_DATA_RESPONSE:
      return { ...state, isLoading: false, data: action.payload };
    case LOAD_STACKOVERFLOW_DATA_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
