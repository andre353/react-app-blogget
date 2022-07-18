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

  // метод concat() добавит к массиву объектов list новый объект с random id
  // при клике на кнопку Добавить таб
  const addItem = () => {
    // деструкторизация, спред оператор, добавление нового объекта с добавлением id
    setList([...list, assignId({value: 'Новый пост'})]); // 2 вариант
    // setList(list.concat(assignId({value: 'Новый пост'}))); // 1 вариант
  };

  // console.log(LIST);

  return (
    <main className={style.main}>
      <Layout className={style.main}>
        <Tabs list={list} setList={setList} addItem={addItem} />
        <List />
      </Layout>
    </main>
  );
};
