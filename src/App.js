import ComponentClass from './components/componentClass/ComponentClass';
import randomWords from 'random-words';

function App() {
  return (
    <header className="App-header">
      <ComponentClass str={randomWords()}/>
    </header>
  );
}

export default App;
