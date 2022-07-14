import ComponentClass from './components/componentClass/ComponentClass';
import React from 'react';
import randomWords from 'random-words';

// 1. Когда приложение запускается, инициализируется данные класс App
class App extends React.Component {
  // 2. инициализируется state
  state = {
    count: 0,
    str: 'Some string or phrase',
  };

  // 3. описывается componentDidMount, но не запускается
  // метод жизненного цикла, как и render
  // вызывается после render()
  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
        str: randomWords(),
      });
    }, 1000);
  }

  // описывается render и компонент, который импортируется - отрисовывается,
  // чтобы ему отрисоваться,создается классовый компонент в файле ComponentClass
  render() {
    return (
      <header className="App-header">
        <ComponentClass string={this.state.str}/>
      </header>
    );
  }
}

export default App;
