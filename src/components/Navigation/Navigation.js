/**
 * @author Juan Carlos Cancela <cancela.juancarlos@gmail.com>
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <Link className={s.link} to="/personas">
          PERSONAS
        </Link>
        <span className={s.spacer}> | </span>
        <Link className={s.link} to="/empresas">
          EMPRESAS
        </Link>
        <span className={s.spacer}> | </span>
        <Link className={s.link} to="/prestadores">
          PRESTADORES
        </Link>
        <span className={s.spacer}> | </span>
        <Link className={s.link} to="/proveedores">
          PROVEEDORES
        </Link>
        <span className={s.spacer}> | </span>
        <Link className={s.link} to="/colaboradores">
          COLABORADORES
        </Link>
        <span className={s.spacer}> | </span>
        <Link className={s.link} to="/rrhh">
          RRHH
        </Link>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
