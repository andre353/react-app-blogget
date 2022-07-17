import style from './List.module.css';
import Post from './Post';

export const List = (props) => {
  const postData = {
    author: 'Nickname',
    title: 'Title',
    ups: 24,
    date: '2022-02-24T09:45:00.000Z',
  };

  return (
    <ul className={style.list}>
      <Post postData={postData} />
    </ul>
  );
};
