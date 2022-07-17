import Layout from '../Layout';
import style from './Main.module.css';
import Tabs from './Tabs';
import List from './List';

export const Main = (props) => (
  <Layout className={style.main}>
    <Tabs />
    <List />
  </Layout>
);
