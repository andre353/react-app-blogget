import React from 'react';
import style from './Layout.module.css';
import PropTypes from 'prop-types';

const Layout = ({children}) => (
  <div className={style.container}>{children}</div>
);

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
