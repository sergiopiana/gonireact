import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import * as dropdownDniActions from '../ducks/tipoDni';
import Dropdown from '../components/Dropdown/Dropdown';

class DropdownTipoDniContainer extends Component {
  static get propTypes() {
    return {
      fetchTipoDni: PropTypes.func.isRequired,
      tipoDni: PropTypes.func.isRequired,
    };
  }
  componentDidMount() {
    this.props.fetchTipoDni();
  }

  render() {
    return <Dropdown name="Tipo de documento" data={this.props.tipoDni} />;
  }
}

const mapStateToProps = state => ({
  tipoDni: state.tipoDni,
});

export default connect(mapStateToProps, dropdownDniActions)(
  withStyles()(DropdownTipoDniContainer),
);
