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
  // изначально дропдайн закрыт
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // true for mobile-first - дропдаун как таковой имеется
  const [isDropdown, setIsDropdown] = useState(true);

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    // debounceRaf() обертка над requestAnimationFrames
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => { // при демонтаже компонента снимает прослушку
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {/* отображаем только на мобильной версии до 767 вкл */}
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
      {/* отображаем когда дропдаун открыт, либо на десктопе > 768px */}
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
