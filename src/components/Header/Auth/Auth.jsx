import React, {useState, useEffect} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as AuthIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../UI/Text/Text';
import {URL_API} from '../../../api/const';
import {Button} from '../../common/Button/Button';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [isLogged, setIsLogged] = useState(true);

  // Task 3
  const handleErrors = (res) => {
    if (!res.ok || res.status === 401) {
      delToken();
      throw Error(res.statusText);
    }
    return res;
  };
  // вся работа с сервером делается через useEffect, т.к. это не касается отрисовки
  useEffect(() => {
    if (!token) return;
    console.log('Сообщение из Auth.js: token есть');
    // обычный get запрос
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        'Authorization': `bearer ${token}`, // make API requests to reddit's servers on behalf of that user
        // "Authorization": `bearer ${localStorage.getItem(token)}`
      }
    }).then((res) => handleErrors(res)).then(res => res.json())
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, ''); // удалить все символы-параметры после знака ?
        setAuth({name, img});
      })
      .catch(err => {
        console.warn(err);
        setAuth({});
      });
  }, [token]);

  const handleLogOut = () => {
    console.log('Нажала в Auth на Иконку Logo');
    setIsLogged(!isLogged);
  };

  const handleClean = () => {
    console.log('Из Auth привет, нажала на Выйти');
    delToken();
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <div className={style.auth__wrapper}>
            <button className={style.btn} onClick={handleLogOut}>
              <img className={style.img} src={auth.img} title={auth.name} alt={`Аватар ${auth.name}`} />
            </button>
            <Text className={style.name}>{auth.name}</Text>
          </div>
          {!isLogged && (<Button bgColor='orange' handleClean={handleClean}>Выйти</Button>)}
        </>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <AuthIcon width={40} height={40} color={`var(--orange)`} />
        </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  auth: PropTypes.any,
  delToken: PropTypes.func,
};
