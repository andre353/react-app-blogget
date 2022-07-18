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

console.log(LIST);

export const Main = (props) => (
  <Layout className={style.main}>
    <Tabs list={LIST} />
    <List />
  </Layout>
);
