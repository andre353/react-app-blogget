import React from 'react';
import style from './Heading.module.css';
import PropTypes from 'prop-types';

export const Heading = (props) => (
  <div className={style.heading}>
    <h1>{props.heading}</h1>
  </div>
);

Heading.propTypes = {
  heading: PropTypes.string
};
