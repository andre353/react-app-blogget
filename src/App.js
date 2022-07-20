import Header from './components/Header';
import Main from './components/Main';
import {useToken} from './hooks/useToken';
// import {useAuth} from './hooks/useAuth';

function App() {
  const [token, delToken] = useToken('');
  // const [auth] = useAuth({});

  return (
    <>
      <Header token={token} delToken={delToken} />
      {/* <Header token={token} delToken={delToken} auth={auth} /> */}
      <Main />
    </>
  );
}

export default App;
