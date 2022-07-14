import React from 'react';
import PropTypes from 'prop-types';

// React.PureComponent реализует shouldComponentUpdate()
// поверхностным сравнением пропсов и состояния = МОНИТОРИТ state,
// благодаря этому немного повышается производительность, т.к. перерендер
// компонента, который НЕ МЕНЯЛСЯ НЕ происходит
// export default class PureComponentClass extends React.Component {
export default class PureComponentClass extends React.PureComponent {
  render() {
    console.log('-------');
    console.log('PureComponentsClass');
    return <p>{this.props.string}</p>;
  }
}

PureComponentClass.propTypes = {
  string: PropTypes.string
};
