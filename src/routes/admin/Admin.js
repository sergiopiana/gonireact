import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import s from './Admin.css';
import AdminItemList from '../../containers/AdminItemList';
import meli from 'mercadolibre';
import queryString from 'query-string';

class Admin extends React.Component {
  constructor(props){
    super(props)
    this.state = {autosList:[] }  
    this.cargar = this.cargar.bind(this);
    this.eliminarItem = this.eliminarItem.bind(this);
    this.cargarAutos = this.cargarAutos.bind(this);
  }
  componentDidMount(){
    const parsedHash = queryString.parse(location.hash);
    //console.log(parsedHash);
    const token = parsedHash.access_token;
    if(token){
      fetch('/api/autosml?token='+token)
      .then(response => response.json())
      .then((json) => {
        this.setState({autosList:json.results })
        console.log(json)
      })
    }else{
      this.cargarAutos()
    }
    
  }
  cargarAutos(){
    fetch('/api/autos', {cache: "no-store"})
      .then(response => response.json())
      .then((json) => {
        console.log(json)
        this.setState({autosList:json.results })
      })      
  }

  cargar(){
    const client_id= 8499389834046886;
    const client_secret = 's7ZMGh6wY73YqFMN8pqei5wgyD0xTGlY';
    const ml_code = 'TG-5a7a40b3e4b0978c68f9b9a4-93187191' 
    let ml_token = '';
    const redirect_uri = 'https://www.goniauto.com.ar/admin/'
    //const meliObject = new meli.Meli(client_id, client_secret);
    //meliObject.getAuthURL(redirect_uri) 
    //+'&redirect_uri='+redirect_uri
    window.location = 'https://auth.mercadolibre.com.ar/authorization?response_type=token&client_id='+client_id
    
  }
  eliminarItem = (id) =>{
    fetch('/api/autoDelete?id='+id)
    .then(this.cargarAutos())
    .then(this.setState({autosList:[] }))
  }

  render() {
    const autoslist = this.state.autosList;

    return (
      <div className={s.root}>
        <div className="container-fluid">
          <button onClick={() => this.cargar()} className="btn btn-secondary">Importar</button>
          <div className="container-fluid">
            {this.state.autosList.map((auto, index) =>
             <div style={{"padding":"10px","border-bottom": "1pt solid black"}} className="row">
              <div className="col-10">
                <AdminItemList key={index} data={auto} /> 
              </div>
              <div className="col-2">
                <button type="button" onClick={()=>this.eliminarItem(index)} className="btn btn-danger">Eliminar</button>
              </div>
        </div>  
        )}
      </div>

        </div>
      </div>
    );
  }
}


export default (Admin);
