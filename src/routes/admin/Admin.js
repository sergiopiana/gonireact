import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import s from './Admin.css';
import Listado from '../../containers/AdminList';
import meli from 'mercadolibre';

class Admin extends React.Component {
  constructor(props){
    super(props)

    this.cargar = this.cargar.bind(this);
  }
  componentDidMount(){

  }
  cargar(){
    const client_id= 8499389834046886;
    const client_secret = 's7ZMGh6wY73YqFMN8pqei5wgyD0xTGlY';
    const ml_code = 'TG-5a7a40b3e4b0978c68f9b9a4-93187191' 
    let ml_token = '';
    const redirect_uri = 'http://localhost:3000/admin'
    //const meliObject = new meli.Meli(client_id, client_secret);
    //meliObject.getAuthURL(redirect_uri) 
    window.location = 'https://auth.mercadolibre.com.ar/authorization?response_type=token&client_id='+client_id
 
  }

  render() {

    return (
      <div className={s.root}>
        <div className="container-fluid">

          <div className="row">
            <div className="col-sm-6">
              <div className="col-sm-6"><button onClick={() => this.cargar()} className="btn btn-secondary">Importar</button></div>
              <div className="col-sm-6"></div>
            </div>
              <div className="col-sm-6"><Listado/></div> 
              <div className="col-sm-6"></div> 
          </div>
        </div>
      </div>
    );
  }
}


export default (Admin);
