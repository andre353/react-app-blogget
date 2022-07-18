import {useState} from 'react';
import Layout from '../Layout';
import style from './Main.module.css';
import Tabs from './Tabs';
import List from './List';
import {assignId} from '../../utils/generateRandomId';
// import {generateRandomId} from '../../utils/generateRandomId';

const LIST = [
  {value: 'Главная'},
  {value: 'Просмотренные'},
  {value: 'Сохраненные'},
  {value: 'Мои посты'},
].map(assignId);
// добавили к каждому объекту свойство id

export const Main = (props) => {
  const [list, setList] = useState(LIST);

  return (
    <Layout className={style.main}>
      <Tabs list={list} setList={setList} />
      <List />
    </Layout>
  );
};
