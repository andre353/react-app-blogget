import React from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as AuthIcon} from './img/login.svg';


export const Auth = ({auth}) => (
  <button className={style.button}>
    {auth ? (
      auth
    ) : (
      <AuthIcon width={40} height={40} color={`var(--orange)`} />
    )}
  </button>
);

Auth.propTypes = {
  auth: PropTypes.string
};
