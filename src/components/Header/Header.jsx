import React from 'react';
import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import Heading from './Heading';

const Header = (props) => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo />
        <Heading heading="Заголовок"/>
        <Search />
        <Auth auth='Alena'/>
      </div>
    </Layout>
  </header>
);

export default Header;
