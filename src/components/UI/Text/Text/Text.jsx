import classNames from 'classnames';
import style from './Text.module.css';

export const Text = (props) => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    className,
    children,
  } = props;

  const classes = classNames(
    className,
    style[color],
    {[style[`fs${size}`]]: size},
    {[style[`fs${tsize}`]]: tsize},
    {[style[`fs${dsize}`]]: dsize},
  );

  return (
    <As className={classes}>{children}</As>
  );
};
