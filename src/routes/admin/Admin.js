import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import s from './Admin.css';
import Listado from '../../containers/AdminList';
import meli from 'mercadolibre';
import queryString from 'query-string';

class Admin extends React.Component {
  constructor(props){
    super(props)

    this.cargar = this.cargar.bind(this);
  }
  componentDidMount(){
    const parsedHash = queryString.parse(location.hash);
    //console.log(parsedHash);
    const token = parsedHash.access_token;
    if(token){
      fetch('/api/autosml?token='+token)
      .then(response => response.json())
      .then((json) => {
        console.log(json)
      })
    }
  }
  cargar(){
    const client_id= 8499389834046886;
    const client_secret = 's7ZMGh6wY73YqFMN8pqei5wgyD0xTGlY';
    const ml_code = 'TG-5a7a40b3e4b0978c68f9b9a4-93187191' 
    let ml_token = '';
    const redirect_uri = 'http://localhost:3000/admin'
    //const meliObject = new meli.Meli(client_id, client_secret);
    //meliObject.getAuthURL(redirect_uri) 
    //+'&redirect_uri='+redirect_uri
    window.location = 'https://auth.mercadolibre.com.ar/authorization?response_type=token&client_id='+client_id
    
  }

  render() {

    return (
      <div className={s.root}>
        <div className="container-fluid">
          <button onClick={() => this.cargar()} className="btn btn-secondary">Importar</button>
            <Listado/>

        </div>
      </div>
    );
  }
}


export default (Admin);
