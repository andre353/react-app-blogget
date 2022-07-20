import React, {useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as AuthIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../UI/Text/Text';
// import {URL_API} from '../../../api/const';
import {Button} from '../../common/Button/Button';
import {useAuth} from '../../../hooks/useAuth';

export const Auth = ({token, delToken}) => {
  const [auth, clearAuth] = useAuth(token);
  const [isLogged, setIsLogged] = useState(true);

  const handleLogOut = () => {
    // console.log('Нажала в Auth на Иконку Logo');
    setIsLogged(!isLogged);
  };

  const handleClean = () => {
    // console.log('Из Auth привет, нажала на Выйти');
    delToken();
    clearAuth();
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
