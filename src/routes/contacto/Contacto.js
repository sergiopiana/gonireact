import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import s from './Contacto.css';
import * as authActions from '../../ducks/auth';


class Contacto extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className="container-fluid">

          <div className="row">
          <div className="col-sm-1"/>
            <div className="col-sm-5">
              <form>
                <div className="form-group">
                  <label for="exampleFormControlInput1">Email</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                  <label for="exampleFormControlInput1">Nombre</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre y Apellido"/>
                </div>  
                <div className="form-group">
                  <label for="exampleFormControlInput1">Teléfono</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="(011)-0000-1234"/>
                </div>                               
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Consulta</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                  <button type="button" class="btn btn-primary">Enviar</button>
              </form>

            </div>
            <div className="col-sm-5">
            </div> 
            <div className="col-sm-1"/>
          </div> 
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, authActions)(Contacto);
