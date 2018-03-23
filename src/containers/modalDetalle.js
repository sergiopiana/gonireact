import React, { Component } from 'react';

class modalDetalle extends React.Component {
  componentDidMount() {
    this.props.fetchautosLista();
  }
  render() {
    const detalle = this.props.data;
    console.log(autoslist);
    return (
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
                  <div style={{backgroundColor:"#eeeeee"}}>
                    <h3 className={s.cardText}><b>Estado:</b> {this.fnEstado(this.state.detalle.condition)}</h3>
                    <hr className={s.hr}/>
                    <h3 className={s.cardText}><b>Marca:</b> {this.state.marca}</h3>
                    <hr className={s.hr}/>
                    <h3 className={s.cardText}><b>Modelo:</b> {this.state.modelo} {this.state.version}</h3>
                    <hr className={s.hr}/>
                    <h3 className={s.cardText}><b>Kms:</b>  {this.state.kms}</h3>
                  </div>
                  <ul className="list-group list-group-flush">
                      {adicionales.map(autodetail => (
                          <li category={autodetail.attribute_group_id} className={`list-group-item ${s.listaDetalle}`}><b>{autodetail.name}:</b> {autodetail.value_name}</li>
                    ))}
                  </ul>
                  <ul className="list-group list-group-flush                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ">
                      {confort.map(autodetail => (
                          <li category={autodetail.attribute_group_id} className={`list-group-item ${s.listaDetalle}`}><b>{autodetail.name}:</b> {autodetail.value_name}</li>
                    ))}
                  </ul>
                </div>    
              </div>
              <div>
                  {autoImages.map(autoImg => (
                    <img onClick={() => this.changeImage(autoImg.url)} src={autoImg.url} class={`img-thumbnail ${s.thumbImg}`}/>
                  ))}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}


export default (modalDetalle);