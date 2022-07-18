import style from './Raiting.module.css';
import PropTypes from 'prop-types';

export const Raiting = (props) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Повысить рейтинг'>
    </button>
    <p className={style.ups}>{props.ups}</p>
    <button className={style.down} aria-label='Понизить рейтинг'>
    </button>
  </div>
);

Raiting.propTypes = {
  ups: PropTypes.number,
};