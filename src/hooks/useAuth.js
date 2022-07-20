import {useState, useEffect, useToken} from 'react'; // все создаваемые хуки используют встроенные хуки
import {URL_API} from '../api/const';

export const useAuth = (state) => {
  const [auth, setAuth] = useState(state);
  const [token, delToken] = useToken('');

  // Task 3
  const handleErrors = (res) => {
    if (!res.ok || res.status === 401) {
      delToken();
      throw Error(res.statusText);
    }
    return res;
  };

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

  return [auth];
};
