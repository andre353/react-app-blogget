import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import {assignId} from '../../../utils/generateRandomId';

import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as EyeIcon} from './img/eye.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as PostIcon} from './img/post.svg';
import {ReactComponent as SaveIcon} from './img/save.svg';
import {debounceRaf} from '../../../utils/debounceRaf';

const LIST = [
  {value: 'Главная', Icon: EyeIcon},
  {value: 'Просмотренные', Icon: HomeIcon},
  {value: 'Сохраненные', Icon: PostIcon},
  {value: 'Мои посты', Icon: SaveIcon},
].map(assignId);
// добавили к каждому объекту свойство id

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // true for mobile-first
  const [isDropdown, setIsDropdown] = useState(true);

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropdown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            Меню
            <ArrowIcon width={15} height={15} />
          </button>
        </div>
      )}

      {(isDropdownOpen || !isDropdown) && (
        <ul
          className={style.list}
          onClick={() => setIsDropdownOpen(false)}>
          {
            LIST.map(({value, id, Icon}) => (
              <li className={style.item} key={id}>
                <button className={style.btn}
                  onClick={() => {
                  }}
                >
                  {value}
                  {Icon && <Icon width={30} height={30} />}
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
