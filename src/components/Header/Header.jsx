import React from 'react';
import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import Heading from './Heading';
import {tokenContext} from '../context/tokenContext';

export const Header = () => {
  // Consumer получит те данные, которые мы передали в Provider в App.js
  // в Consumer также есть встроенный объект, который записываем передаваемые значения как свои свойства - ctx ниже
  const {Consumer} = tokenContext;

  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo />
          <Heading heading="Главная"/>
          <Search />
          <Consumer>
            {/* если передаваемые св-ва и атрибуты одноименны  - т.е. в Auth получаем как изначально наименовались */}
            {(ctx) => <Auth {...ctx} />}
          </Consumer>
        </div>
      </Layout>
    </header>
  );
};
