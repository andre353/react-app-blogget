import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';

export const Text = (props) => {
  const {
    As = 'span',
    color = '#333333',
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
    fontWeight,
  } = props;

  // console.log(center);

  const classes = classNames(
    className,
    style[color],
    {[style.center]: center},
    {[style[`fs${size}`]]: size},
    {[style[`fst${tsize}`]]: tsize},
    {[style[`fsd${dsize}`]]: dsize},
    {[style[`fw${fontWeight}`]]: fontWeight},
  );

  return (
    <As className={classes} href={href}>{children}</As>
  );
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
  href: PropTypes.string,
  fontWeight: PropTypes.string,
  center: PropTypes.bool,
};
