import style from './Tabs.module.css';

export const Tabs = (props) => (
  <ul className={style.list}>
    <li><a href="/">Главная</a></li>
    <li><a href="/">Просмотренные</a></li>
    <li><a href="/">Сохраненные</a></li>
    <li><a href="/">Мои Посты</a></li>
  </ul>
);
