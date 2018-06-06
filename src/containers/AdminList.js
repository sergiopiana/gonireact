import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as autosActions from '../ducks/autos';

class AdminList extends React.Component {
  componentDidMount() {
    this.props.fetchautosLista();
  }
  render() {
    const autoslist = this.props.autos;
    console.log(autoslist);
    return (
      <div className="row">
        {autoslist.map(auto => (
          <div className="col-sm-12" >
            <text key={auto}>{auto}</text>
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
