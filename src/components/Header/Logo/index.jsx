import React from 'react';
import style from './Logo.module.css';
import logo from './img/logo.svg';

const Logo = (props) => (
  <a className={style.link} href="/">
    <img className={style.logo} src={logo} alt="Blogget Logo" />
  </a>
);

export default Logo;
