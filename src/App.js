import Header from './components/Header';
import Main from './components/Main';
import {tokenContext} from './components/context/tokenContext';
import {useToken} from './hooks/useToken';

function App() {
  const [token, delToken] = useToken('');
  const {Provider} = tokenContext; // createContext возращает методы Provider и Consumer

  return (
    <Provider value={{token, delToken}}>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
