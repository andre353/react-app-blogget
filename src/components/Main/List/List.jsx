import style from './List.module.css';
import Post from './Post';

export const List = (props) => {
  const postsData = [
    {
      author: 'Nickname1',
      title: 'Title1',
      ups: 111,
      date: '2022-01-11T01:11:00.000Z'
    },
    {
      author: 'Nickname2',
      title: 'Title2',
      ups: 22,
      date: '2022-02-22T02:22:00.000Z'
    },
    {
      author: 'Nickname3',
      title: 'Title3',
      ups: 33,
      date: '2022-03-03T03:33:00.000Z'
    },
    {
      author: 'Nickname4',
      title: 'Title4',
      ups: 44,
      date: '2022-04-24T04:44:00.000Z'
    }
  ];

  return (
    <ul className={style.list}>
      {
        postsData.map((postData, i) => <Post key={i} postData={postData} />)
      }
    </ul>
  );
};
