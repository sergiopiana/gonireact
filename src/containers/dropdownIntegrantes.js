import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import * as dropdownIntegrantesActions from '../ducks/integrantes';
import Dropdown from '../components/Dropdown/Dropdown';

class DropdownIntegrantesContainer extends Component {
  static get propTypes() {
    return {
      fetchIntegrantes: PropTypes.func.isRequired,
      inte: PropTypes.func.isRequired,
    };
  }
  componentDidMount() {
    this.props.fetchIntegrantes();
  }

  render() {
    return <Dropdown name="Integrantes" data={this.props.inte} />;
  }
}

const mapStateToProps = state => ({
  inte: state.integrantes,
});

export default connect(mapStateToProps, dropdownIntegrantesActions)(
  withStyles()(DropdownIntegrantesContainer),
);
