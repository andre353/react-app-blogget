import React from 'react';
import PropTypes from 'prop-types';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {error: ''};
  }

  componentDidCatch(error) {
    this.setState({error: `${error.name}: ${error.message}`});
  }

  render() {
    const {error} = this.state;
    if (error) {
      return (
        <div>{error}</div>
      );
    } else {
      return <>{this.props.children}</>;
    }
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any,
};
