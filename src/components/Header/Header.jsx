import React, {useContext} from 'react';
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
  // const {Consumer} = tokenContext;
  // после появления хука useContext, стало возможным получать этот объект напрямую при помощи хука
  const ctx = useContext(tokenContext);

  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo />
          <Heading heading="Главная"/>
          <Search />
          <Auth {...ctx} />
        </div>
      </Layout>
    </header>
  );
};
