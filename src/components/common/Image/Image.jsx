import PropTypes from 'prop-types';

export const Image = ({styles, src, alt}) => (
  <img className={styles} src={src} alt={alt} />
);

Image.propTypes = {
  styles: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};
