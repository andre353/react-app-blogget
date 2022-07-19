import style from './Raiting.module.css';
import PropTypes from 'prop-types';
import Text from '../../UI/Text';

export const Raiting = (props) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Повысить рейтинг'>
    </button>
    <Text As='p' className={style.ups}>{props.ups}</Text>
    <button className={style.down} aria-label='Понизить рейтинг'>
    </button>
  </div>
);

Raiting.propTypes = {
  ups: PropTypes.number,
};
