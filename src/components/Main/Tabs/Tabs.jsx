import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {assignId} from '../../../utils/generateRandomId';

const LIST = [
  {value: 'Главная'},
  {value: 'Просмотренные'},
  {value: 'Сохраненные'},
  {value: 'Мои посты'},
].map(assignId);
// добавили к каждому объекту свойство id

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.wrapperBtn}>
        <button
          className={style.btn}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          Меню
        </button>
      </div>

      {isDropdownOpen && (
        <ul
          className={style.list}
          onClick={() => setIsDropdownOpen(false)}>
          {
            LIST.map(({value, id}) => (
              <li className={style.item} key={id}>
                <button className={style.btn}
                  onClick={() => {
                  }}
                >
                  {value}
                </button>
              </li>
            ))
          }
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
