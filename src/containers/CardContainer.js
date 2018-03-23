import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Card.css';
import CardHead from '../components/CardHead';
import _ from 'lodash';
import Loading from '../components/Loading';

class CardContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {detalle:[] }
    this.state = {color:[] }
    this.state = {marca:[] }
    this.state = {modelo:[] }
    this.state = {version:[] }
    this.state = {anio:[] }
    this.state = {imageDetail:''}
    this.changeImage = this.changeImage.bind(this);
  }

  fnEstado(estado){
    switch (estado) {
      case "new":
        return "Nuevo"
      case "used":
        return "Usado"          
    }
  }
  fnMoneda(moneda){
    switch (moneda) {
      case "ARS":
        return "$"
      case "DOLLAR":
        return "u$s"          
    }
  }  
  changeImage(image){
   this.setState({imageDetail: image})
    //return()
  }

  componentDidMount(){
    fetch('/api/detalleml?item='+this.props.data)
    .then(response => response.json())
    .then((json) => {
      //console.log("Deta"+json.title)
      this.setState({detalle:json })
      this.setState({image:json.pictures[0].url})
      this.setState({imageDetail:json.pictures[0].url})
      if(!_.isUndefined(_.find(json.attributes, ['id', 'COLOR']))){
        this.setState({color: (_.find(json.attributes, ['id', 'COLOR']).value_name)})
      }
      if(!_.isUndefined(_.find(json.attributes, ['id', 'BRAND']))){
        this.setState({marca: (_.find(json.attributes, ['id', 'BRAND']).value_name)})
      }
      if(!_.isUndefined(_.find(json.attributes, ['id', 'MODEL']))){
        this.setState({modelo: (_.find(json.attributes, ['id', 'MODEL']).value_name)})
      }
      //this.setState({version:(_.find(json.attributes, ['id', 'TRIM']).value_name)}) 
      if(!_.isUndefined(_.find(json.attributes, ['id', 'VEHICLE_YEAR']))){      
        this.setState({anio: (_.find(json.attributes, ['id', 'VEHICLE_YEAR']).value_name)})
      }
      if(!_.isUndefined(_.find(json.attributes, ['id', 'KILOMETERS']))){
        this.setState({kms: (_.find(json.attributes, ['id', 'KILOMETERS']).value_name)}) 
      }
      if(!_.isUndefined(_.find(json.attributes, ['id', 'DOORS']))){
        this.setState({puertas: (_.find(json.attributes, ['id', 'DOORS']).value_name)})
      }
      //if(!_.isEmpty(_.find(json.attributes, ['id', 'TRIM']).value_name)){
      //this.setState({motor: (_.find(json.attributes, ['id', 'TRIM']).value_name)})
      //}
      if(!_.isUndefined(_.find(json.attributes, ['id', 'FUEL_TYPE']))){
        this.setState({combustible: (_.find(json.attributes, ['id', 'FUEL_TYPE']).value_name)}) 
      }                                        
    })
  }



  render() {
    if (_.isEmpty(this.state.detalle)){
      return(
        <div className={s.root}>
          <div className={s.container}>
            <div className={`card ${s.card}`} >
              <div className={`card-body ${s.cardBody}`} >
                <div align="center" style={{"marginTop":"100px"}}>
                  <Loading/>
                </div>
              </div>
            </div>
          </div>
        </div>    
      )
    }

    
    let autoImages = this.state.detalle.pictures;
    let autoDetails = this.state.detalle.attributes;
    const confort = autoDetails.filter(confort => confort.attribute_group_id == "CONFORT" && confort.value_name != "No")
    const adicionales = autoDetails.filter(confort => confort.attribute_group_id == "ADICIONALES" && confort.value_name != "No")
    const seguridad = autoDetails.filter(confort => confort.attribute_group_id == "SECURITY" && confort.value_name != "No")    
    const equipamiento = autoDetails.filter(confort => confort.attribute_group_id == "EQUIPAMIENTO" && confort.value_name != "No")
    const sonido = autoDetails.filter(confort => confort.attribute_group_id == "SONIDO" && confort.value_name != "No")
    console.log(confort);
    return(
      <div className={s.root}>
        <div className={s.container}>

          <div className="modal fade" id={this.state.detalle.id} tabindex="-1" role="dialog">
            <div className={`modal-dialog modal-lg ${s.modalStyle}`} role="document">
              <div className="modal-content">
                <div className="modal-header">                                                                                                                     
                  <h5 className="modal-title">{this.state.detalle.title}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">                                                                                                                            
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <img id={`img${this.state.detalle.id}`} className={`img-fluid`} src={this.state.imageDetail} /> 
                    </div>
                    <div className="col-sm-12 col-md-6">
                    <div className="panel list-group">
                        <h3 className={`list-group-item ${s.cardTextDetalle}`}><div className="row"><div className="col-sm-6"> <b>Estado:</b> {this.fnEstado(this.state.detalle.condition)}</div><div className="col-sm-6"><b>Kms:</b>  {this.state.kms}</div></div></h3>
                        <h3 className={`list-group-item ${s.cardTextDetalle}`}><div className="row"><div className="col-sm-6"> <b>Marca:</b> {this.state.marca}</div><div className="col-sm-6"><b>Modelo:</b> {this.state.modelo} {this.state.version}</div></div></h3>
                        <h3 className={`list-group-item ${s.cardTextDetalle}`}><div className="row"><div className="col-sm-6"> <b>combustible:</b> {this.state.combustible}</div><div className="col-sm-6"><b>Puertas:</b> {this.state.puertas}</div></div></h3>
                       
                      </div>
                        <br/>
                          <div id={this.props.data}>
                            <div className="panel list-group">
                            <a href="#" className={`list-group-item ${s.cardTextTitulos}`} data-toggle="collapse" data-target={`#sm${this.props.data}`} data-parent={`#${this.props.data}`}><b>Accesorios</b></a>
                            <div id={`sm${this.props.data}`} className="sublinks collapse">
                              {adicionales.map(autodetail => (
                                <a className="list-group-item small"><span className="glyphicon glyphicon-chevron-right"></span><b>{autodetail.name}:</b> {autodetail.value_name}</a>
                              ))}
                            </div>
                            <a href="#" className={`list-group-item ${s.cardTextTitulos}`} data-toggle="collapse" data-target={`#sl${this.props.data}`} data-parent="#menu"><b>Confort</b><span className="glyphicon glyphicon-tag pull-right"></span></a>
                            <div id={`sl${this.props.data}`} className="sublinks collapse">
                              {confort.map(autodetail => (
                                <a className="list-group-item small"><span className="glyphicon glyphicon-chevron-right"></span><b>{autodetail.name}:</b> {autodetail.value_name}</a>
                              ))}
                            </div>
                            <a href="#" className={`list-group-item ${s.cardTextTitulos}`} data-toggle="collapse" data-target={`#eq${this.props.data}`} data-parent="#menu"><b>Equipamiento</b><span className="glyphicon glyphicon-tag pull-right"></span></a>
                            <div id={`eq${this.props.data}`} className="sublinks collapse">
                              {equipamiento.map(autodetail => (
                                <a className="list-group-item small"><span className="glyphicon glyphicon-chevron-right"></span><b>{autodetail.name}:</b> {autodetail.value_name}</a>
                              ))}
                            </div>
                            <a href="#" className={`list-group-item ${s.cardTextTitulos}`} data-toggle="collapse" data-target={`#se${this.props.data}`}  data-parent="#menu"><b>Seguridad</b><span className="glyphicon glyphicon-tag pull-right"></span></a>
                            <div id={`se${this.props.data}`}  className="sublinks collapse">
                              {seguridad.map(autodetail => (
                                <a className="list-group-item small"><span className="glyphicon glyphicon-chevron-right"></span><b>{autodetail.name}:</b> {autodetail.value_name}</a>
                              ))}
                            </div>  
                            <a href="#" className={`list-group-item ${s.cardTextTitulos}`} data-toggle="collapse" data-target={`#so${this.props.data}`}  data-parent="#menu"><b>Sonido</b><span className="glyphicon glyphicon-tag pull-right"></span></a>
                            <div id={`so${this.props.data}`}  className="sublinks collapse">
                              {sonido.map(autodetail => (
                                <a className="list-group-item small"><span className="glyphicon glyphicon-chevron-right"></span><b>{autodetail.name}:</b> {autodetail.value_name}</a>
                              ))}
                            </div>                                                        
                           </div>
                          </div>



                            {/* <ul className="list-group list-group-flush                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ">
                                {confort.map(autodetail => (
                                    <li category={autodetail.attribute_group_id} className={`list-group-item ${s.listaDetalle}`}><b>{autodetail.name}:</b> {autodetail.value_name}</li>
                              ))}
                            </ul> */}



                    </div>    
                  </div>
                  <hr/>
                  <div>
                      {autoImages.map(autoImg => (
                        <img onClick={() => this.changeImage(autoImg.url)} src={autoImg.url} className={`img-thumbnail ${s.thumbImg}`}/>
                      ))}
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>


          <div className={`card ${s.card}`} >
            <div align="center">
                <p className={s.cardTitleText}>{this.state.detalle.title}</p>
              <img className={`img-fluid rounded ${s.cardImg}`} src={this.state.image} />  
            </div>
            <div className={`card-body ${s.cardBody}`} >
              <h3 className={s.cardText}><b>Estado:</b> {this.fnEstado(this.state.detalle.condition)}</h3>
              <hr className={s.hr}/>
              <h3 className={s.cardText}><b>Marca:</b> {this.state.marca}</h3>
              <hr className={s.hr}/>
              <h3 className={s.cardText}><b>Modelo:</b> {this.state.modelo} {this.state.version}</h3>
              <hr className={s.hr}/>
              <h3 className={s.cardText}><b>Kms:</b>  {this.state.kms}</h3>
             
              <div className={`card-footer text-muted ${s.cardFooter}`}>
                <div className="row">
                  <div className="col-sm">
                    <button type="button" data-toggle="modal" data-target={`#${this.state.detalle.id}`} className={`btn btn-outline-secondary ${s.btnDetalle}`}>FICHA</button>

                  </div>
                  <div className="col-sm" align="right">
                    <span className={s.cardTitlePrice}><b> {this.fnMoneda(this.state.detalle.currency_id)} {this.state.detalle.price}</b></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className={`card ${s.card}`} >
            <div className="card-header">
            {this.state.detalle.title}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><img align="center" className={s.cardImg} src={this.state.image} /></li>
              <li className="list-group-item"><b>Estado:</b> {this.fnEstado(this.state.detalle.condition)}</li>
              <li className="list-group-item"><b>Marca:</b>  {this.state.marca} {this.state.modelo} {this.state.version}</li>
              <li className="list-group-item"><b>Kms:</b>  {this.state.kms}</li>
              <li className="list-group-item"><b>{this.state.detalle.currency_id} {this.state.detalle.price}</b></li>              
            </ul>            
          </div>          */}
        </div>
      </div>

    );
  }
}
export default withStyles(s)(CardContainer);
