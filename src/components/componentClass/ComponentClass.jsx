import React from 'react';
import PropTypes from 'prop-types';

// React.Component не проверяет изменение state компонента App
// на момент составляющих его переменных - ему дают команду рендер
// и он рендерит = происходит ПЕРЕрендер компонента
// даже в отсутствие изменения значения переменной в props
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
