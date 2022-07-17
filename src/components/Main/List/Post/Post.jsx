import style from './Post.module.css';
import nophoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import PostContent from './PostContent';
import Rating from '../../../common/Raiting';
import Image from '../../../common/Image';
import Date from '../../../common/Date';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  return (
    <li className={style.post}>
      <Image styles={style.img} src={nophoto} alt={title} />

      <PostContent title={title} author={author} />

      <Rating ups={ups}/>

      <Date date={date} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    ups: PropTypes.number,
    date: PropTypes.string,
    // date: PropTypes.instanceOf(Date),
  }),
};
