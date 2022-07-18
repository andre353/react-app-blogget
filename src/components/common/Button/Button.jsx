import React from 'react';
import style from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({styles, children}) =>
  <button className={`${style.btn} ${styles && styles}`}>{children && children}</button>;
  // <button className={`${style.btn} ${styles && styles}`}>{svg && <Image src={svg}/>}</button>;

Button.propTypes = {
  svg: PropTypes.string,
  styles: PropTypes.string,
  children: PropTypes.object,
};
