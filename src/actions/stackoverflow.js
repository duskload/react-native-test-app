import axios from 'axios/index';

import {
  LOAD_STACKOVERFLOW_DATA_ERROR,
  LOAD_STACKOVERFLOW_DATA_RESPONSE,
  LOAD_STACKOVERFLOW_DATA_REQUEST,
  STACKOVERFLOW_URL
} from './constants';

import { showLoader } from './auth';

export const getStackOverflowTopics = () => dispatch => {
  dispatch(showLoader(LOAD_STACKOVERFLOW_DATA_REQUEST));
  axios
    .get(STACKOVERFLOW_URL)
    .then(response => {
      dispatch(dataLoadSuccess(response.data));
    })
    .catch(error => {
      dispatch(dataLoadError(error.message));
    });
};

export const dataLoadSuccess = payload => dispatch => {
  dispatch({ type: LOAD_STACKOVERFLOW_DATA_RESPONSE, payload });
};

export const dataLoadError = payload => dispatch => {
  dispatch({ type: LOAD_STACKOVERFLOW_DATA_ERROR, payload });
};
