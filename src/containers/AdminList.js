import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as autosActions from '../ducks/autos';
import AdminItemList from './AdminItemList';

class AdminList extends React.Component {
  constructor(props){
    super(props)

    this.eliminarItem = this.eliminarItem.bind(this);
  }

  componentDidMount() {
    this.props.fetchautosLista();
  }
  eliminarItem = (id) =>{
    fetch('/api/autoDelete?id='+id)
    .then(this.props.fetchautosLista())

  }
  
  render() {
    const autoslist = this.props.autos;
    //console.log(autoslist);
    return (
      <div className="container-fluid">
        {autoslist.map(auto, index => (
      <div style={{"padding":"10px"}} className="row">
          <div className="col-10">
          <AdminItemList key={index} data={auto} /> 
          </div>
          <div className="col-2">
            {/* <button type="button" onclick={this.eliminarItem(auto)} className="btn btn-danger">Eliminar</button> */}
          </div>
        </div>  
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  autos: state.autos,
});

export default connect(mapStateToProps, autosActions)(AdminList);
