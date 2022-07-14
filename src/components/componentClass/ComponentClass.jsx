import React from 'react';
import PropTypes from 'prop-types';

export default class ComponentClass extends React.Component {
  render() {
    console.log('-------');
    console.log('ComponentsClass');
    return <p>{this.props.string}</p>;
  }
}

ComponentClass.propTypes = {
  string: PropTypes.string
};
