import React from 'react';
import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import Heading from './Heading';
import PropTypes from 'prop-types';

export const Header = ({token, delToken, auth}) => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo />
        <Heading heading="Главная"/>
        <Search />
        <Auth token={token} delToken={delToken} />
      </div>
    </Layout>
  </header>
);

Header.propTypes = {
  token: PropTypes.string,
  auth: PropTypes.any,
  delToken: PropTypes.func,
};
