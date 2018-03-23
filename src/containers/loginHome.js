import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as authActions from '../ducks/auth';
import PropTypes from "prop-types";

class loginPage extends React.Component {

  onLoginDataSubmit() {
    const user = $('#Usuario').val();
    const pass = $('#Password').val();
    console.log(user+' '+pass);
    this.props.fetchAuth(user, pass);
  }
 

  render() {
      return(
          <div className="row">
              <div className="col-sm"></div>
              <div className="col-sm-5">
                  <form>
                    <div className="form-group">
                      <label for="usuario">Usuario</label>
                      <input type="text" className="form-control" id="Usuario"  placeholder="Usuario"></input>
                    </div>
                    <div className="form-group">
                      <label for="Password">Password</label>
                      <input type="password" className="form-control" id="Password" placeholder="Password"></input>
                    </div>
                    <button type="button" onClick={() => this.onLoginDataSubmit()} className="btn btn-primary" >Ingresar</button>
                  </form>
              </div>
              <div className="col-sm"></div>
            </div>


      )
    }
};
const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, authActions)(loginPage);
