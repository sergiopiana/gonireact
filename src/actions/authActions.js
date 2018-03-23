/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
/* eslint consistent-return: 0 */

import request from 'request';
import {
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_REFRESH_TOKEN,
} from '../constants/index';

export const authSuccess = data => ({
  type: AUTH_SUCCESS,
  data,
});

export const authError = error => ({
  type: AUTH_ERROR,
  data: error,
});

export const authTokenRefresh = data => ({
  type: AUTH_REFRESH_TOKEN,
  data,
});

export const fetchAuth = (documento, password) => dispatch => {
  const options = {
    uri: 'http://localhost:3000/auth',
    method: 'POST',
    json: {
      documento,
      password,
    },
  };
  request(options, (err, rsp, body) => {
    if (err) return authError(err);
    if (!err && rsp.statusCode === 200) {
      dispatch(authSuccess(body.data));
    }
  });
};

export const renewToken = (token, callbackAction) => dispatch => {
  const options = {
    uri: 'http://localhost:3000/renew-token',
    method: 'POST',
    json: {
      token,
    },
  };
  request(options, (err, rsp, body) => {
    if (err) return authError(err);
    if (!err && rsp.statusCode === 200) {
      dispatch(authTokenRefresh(body.data));
      if (callbackAction) dispatch(callbackAction());
    }
  });
};
