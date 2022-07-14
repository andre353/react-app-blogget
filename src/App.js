import React from 'react';
import ComponentClass from './components/componentClass/ComponentClass';
import PureCompClass from './components/pureComponentClass/PureComponentClass';
import {ComponentFunc} from './components/ComponentFunc';
import randomWords from 'random-words';
import Button from './components/Button';

// 1. Когда приложение запускается, инициализируется данные класс App
class App extends React.Component {
  // 2. инициализируется state
  state = {
    count: 0,
    str: 'Some string or phrase',
    pure: 'pure',
    func: 'func'
  };

  // 3. описывается componentDidMount, но не запускается
  // метод жизненного цикла, как и render
  // вызывается после render()
  componentDidMount() {
    setInterval(() => {
      // при четном вызове setState и при React.PureComponent
      // PureComponent.jsx не будет вызываться
      if (this.state.count % 2) {
        this.setState({
          count: this.state.count + 1,
          str: randomWords(),
        });
      } else {
        this.setState({
          count: this.state.count + 5,
          str: randomWords(),
          pure: randomWords(),
          func: randomWords(),
        });
      }
    }, 10000);
  }

  // описывается render и компонент, который импортируется - отрисовывается,
  // чтобы ему отрисоваться,создается классовый компонент
  // в файле ComponentClass
  render() {
    return (
      <header className="App-header">
        <Button text="Кликни" />
        <ComponentClass string={this.state.str}/>
        <PureCompClass string={this.state.pure}/>
        <ComponentFunc funcattr={this.state.func}/>
      </header>
    );
  }
}

export default App;
