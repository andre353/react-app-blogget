import React from 'react';

export default class ComponentClass extends React.Component {
  state = {
    count: 0,
  };

  typeComponent = 'Class!';

  count = 0;

  logged = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(++this.count);
  };

  render() {
    return (
      <div className="container">
        <p>{this.typeComponent} {this.state.count}</p>
        <button onClick={this.logged}>Component</button>
      </div>
    );
  }
}
