import style from './Tabs.module.css';
import PropTypes from 'prop-types';

export const Tabs = ({list}) => (
  <ul className={style.list}>
    {
      list.map(({value, id}) => (
        <li key={id}>
          <button>{value}</button>
        </li>
      ))
    }
  </ul>
);

Tabs.propTypes = {
  list: PropTypes.array,
};
