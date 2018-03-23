/* eslint react/prop-types: 0 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Dropdown.css';

class Dropdown extends React.Component {
  static renderList(data) {
    return (
      <div key={data.label}>
        <a className="dropdown-item" href="link">
          {data.label}
        </a>
      </div>
    );
  }

  render() {
    return (
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-danger dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {this.props.name}
        </button>
        <div className="dropdown-menu">
          {this.props.data.map(Dropdown.renderList)}
        </div>
      </div>
    );
  }
}

export default withStyles()(Dropdown);
