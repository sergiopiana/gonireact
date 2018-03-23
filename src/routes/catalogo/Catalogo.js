import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Home from '../../containers/catalogo';
import s from './Catalogo.css';
import * as authActions from '../../ducks/auth';

import LoginHome from '../../containers/loginHome';

class Catalogo extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className="container-fluid">
          <Home total="" />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, authActions)(Catalogo);
