import {
  URL_AUTH,
  CLIENT_ID,
  RESPONSE_TYPE,
  RANDOM_STRING,
  REDIRECT_URI,
  SCOPE_STRING,
} from './const';

// const CLIENT_ID = process.env.CLIENT_ID;

// создаем новый объект
const searchParams = new URLSearchParams('');

// собираем данные и записываем их в searchParams
searchParams.append('client_id', CLIENT_ID);
searchParams.append('response_type', RESPONSE_TYPE);
searchParams.append('state', RANDOM_STRING);
searchParams.append('redirect_uri', REDIRECT_URI);
searchParams.append('scope', SCOPE_STRING);

// к импортируемой из сonst.js URL_AUTH конкатенацией добавляем все полученные из адресной строки данные предварительно
// превращая их из объектов в строки
export const urlAuth = `${URL_AUTH}${searchParams.toString()}`;
