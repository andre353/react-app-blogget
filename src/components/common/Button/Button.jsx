import React from 'react';
import style from './Button.module.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Button = (props) => {
  const {
    color = '#333333',
    bgColor = '#cc6633',
    width,
    height,
    className,
    children,
    center,
  } = props;

  const classes = classNames(
    className,
    style[color],
    {[style.bgColor]: bgColor},
    {[style.center]: center},
    {[style[`fs${width}`]]: width},
    {[style[`fs${height}`]]: height},
  );

  return (
    <button
      className={classes}
      onClick={props.handleClean}>{children && children}</button>
    // <button className={`${style.btn} ${styles && styles}`}>{svg && <Image src={svg}/>}</button>;
  );
};


Button.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
  center: PropTypes.bool,
  handleClean: PropTypes.func,
};
