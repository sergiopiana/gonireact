/**
 * Login Component
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */
/* global $ */
/* eslint react/no-did-mount-set-state: 0 */
/* eslint react/prop-types: 0 */
/* eslint consistent-return: 0 */

import React from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import _ from 'lodash';
import * as authActions from '../../actions/authActions';
import s from './Login.css';
import { LOCALSTORAGE_AUTH_KEY } from '../../constants';

const LOGIN_STATUS_PENDING = 'pending';
const LOGIN_STATUS_NOT_LOGGED_IN = 'not-logged-in';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginStatus: LOGIN_STATUS_PENDING,
    };
  }

  componentDidMount() {
    const auth = localStorage.getItem(LOCALSTORAGE_AUTH_KEY);
    if (_.isEmpty(auth)) {
      this.setState({ loginStatus: LOGIN_STATUS_NOT_LOGGED_IN });
    } else {
      this.props.authSuccess(JSON.parse(auth));
    }
  }

  onLoginDataSubmit() {
    const user = $('#userField').val();
    const pass = $('#passwordField').val();
    this.props.fetchAuth(user, pass);
  }

  render() {
    const loginStatus = this.state.loginStatus;
    if (!_.isEmpty(this.props.auth)) {
      localStorage.setItem(
        LOCALSTORAGE_AUTH_KEY,
        JSON.stringify(this.props.auth),
      );
      const name = this.props.auth.user.nombre;
      return (
        <div className={s.welcome}>
          Bienvenido, {name}
        </div>
      );
    }
    if (loginStatus === LOGIN_STATUS_PENDING) {
      return <div />;
    }

    if (loginStatus === LOGIN_STATUS_NOT_LOGGED_IN) {
      return (
        <div className="col-lg-6">
          <span className="input-group">
            <input
              id="userField"
              type="text"
              className="form-control"
              placeholder="Usuario"
            />
            <input
              id="passwordField"
              type="password"
              className="form-control"
              placeholder="Contraseña"
            />
            <button
              type="button"
              onClick={() => this.onLoginDataSubmit()}
              className="btn btn-primary"
            >
              Login
            </button>
          </span>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, authActions)(withStyles(s)(Login));
