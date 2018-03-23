import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './CardContainer';
import * as autosActions from '../ducks/autos';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchautosLista();
  }
  render() {
    const autoslist = this.props.autos;
    console.log(autoslist);
    return (
      <div className="row">
        {autoslist.map(auto => (
          <div className="col-sm-4 col-lg-3 col-xl-2" >
            <Card
              key={auto.id}
              data={auto.id}
            />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  autos: state.autos,
});

export default connect(mapStateToProps, autosActions)(Home);
