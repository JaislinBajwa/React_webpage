import React from 'react';

class CounterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      minLimit: 0,
      maxLimit: 10,
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => {
      if (prevState.count < this.state.maxLimit) {
        return {
          count: prevState.count + 1,
        };
      }
      return null; 
    });
  };

  decrementCounter = () => {
    this.setState((prevState) => {
      if (prevState.count > this.state.minLimit) {
        return {
          count: prevState.count - 1,
        };
      }
      return null;
    });
  };

  resetCounter = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    const { count, minLimit, maxLimit } = this.state;

    return (
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={this.incrementCounter} disabled={count >= maxLimit}>
          Increment
        </button>
        <button onClick={this.decrementCounter} disabled={count <= minLimit}>
          Decrement
        </button>
        <button onClick={this.resetCounter}>Reset</button>
      </div>
    );
  }
}

export default CounterComponent;
