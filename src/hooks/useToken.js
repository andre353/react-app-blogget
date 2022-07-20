import {useState, useEffect} from 'react'; // все создаваемые хуки используют встроенные хуки

export const useToken = (state) => {
  const [token, setToken] = useState(state);

  useEffect(() => {
    // если адресная строка содержит /auth, значит затем пойдет token
    if (location.pathname.includes('/auth')) {
      // получаем из адресной строки, удаляем знак #, который под 0 индексом
      const ourToken = new URLSearchParams(location.hash.substring(1))
        .get('access_token');
      setToken(ourToken);
    }
    // после закрытия сайта -> войти уже авторизованным
    if (localStorage.getItem('bearer')) {
      setToken(localStorage.getItem('bearer')); // 2. уже из Localstorage берем
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('bearer', token); // 1.
    }
  }, [token]);

  const delToken = () => {
    console.log('нажала Выйти');
    setToken(localStorage.removeItem('bearer', token));
  };

  return [token, delToken];
};
