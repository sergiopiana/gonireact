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
          <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3" >
            <Card
              key={auto}
              data={auto}
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
