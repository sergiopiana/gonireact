import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './CardContainer';
import Slider from './Slider';
import * as autosActions from '../ducks/autos';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchautosLista();
  }
  render() {
    const autoslist = this.props.autos;
    console.log(autoslist);
    return (
    <div>
      <div className="col-md">
        <Slider /><br/>
      </div>
      <div className="row">
      
       {autoslist.slice(0, 6).map(auto => (
          <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3" >
            <Card
              key={auto}
              data={auto}
            />
          </div>
        ))}
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  autos: state.autos,
});

export default connect(mapStateToProps, autosActions)(Home);
