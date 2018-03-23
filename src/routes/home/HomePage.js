import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Home from '../../containers/home';
import s from './HomePage.css';
import * as authActions from '../../ducks/auth';

import LoginHome from '../../containers/loginHome';

class HomePage extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className="container-fluid">
          <Home total="10"/>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, authActions)(HomePage);
