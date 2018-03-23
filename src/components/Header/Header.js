
import React from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import _ from 'lodash';

class Header extends React.Component {
  render() {
      return(
      <div className={s.root}>
        <div style={{backgroundColor:"black", height:"25px"}}></div>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid" style={{paddingRight:"150px"}}>
            <span className="navbar-brand" style={{marginRight:"30px"}}>
              <img className={s.brandImg} src="logoGoni.png"/>
            </span>

            <ul className="nav navbar-nav navbar-right" >
              <li className="nav-item active" style={{padding:"5px"}}>
                <a className="nav-link btn btn-outline-secondary" href="/">Home<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item" style={{padding:"5px"}}>
                <a className="nav-link btn btn-outline-secondary" href="/catalogo">Catálogo</a>
              </li>
              <li className="nav-item" style={{padding:"5px"}}>
                <a className="nav-link btn btn-outline-secondary" href="/contacto">Contáctenos</a>
              </li>
            </ul>  
            </div>
          </nav>
          <hr className={s.lineaSombra}/>
        
      </div>        
      )
    }
  
}

export default (withStyles(s)(Header));
