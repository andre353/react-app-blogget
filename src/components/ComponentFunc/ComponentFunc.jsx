import React from 'react';
import PropTypes from 'prop-types';
// к каждому классу будет сгенерированно числовой суффикс к назнанию,
// чтобы стили разных компонентов были разноименными
import style from './style.module.css';

// если компонент рендерит всегда одно и то же = props не меняются
// можно обернуть в React.memo для повышения производительности
// есть риск, когда и если state изменится - рендера точно не будет!

// React.memo - функция-обертка, функция высшего порядка, принимающая
// другую функцию и возвращает нам мемонизированную функцию
export const ComponentFunc = React.memo((props) => {
  console.log('-------');
  console.warn('ComponentFunc');
  return <p className={style.text}>{props.funcattr}</p>;
});

ComponentFunc.propTypes = {
  funcattr: PropTypes.string
};

// Exporting an arrow function directly doesn't give the component a displayName
// but if you export a regular function the function name
// will be used as displayName

// OR like here: You can also put the function in a variable,
// set the displayName on the function manually, and then export it.

// displayName is used by the Developer Tools to give a name
// to the components you use.
// If a component doesn't have a displayName is will be shown as <Unknown />
ComponentFunc.displayName = 'ComponentFunc';
