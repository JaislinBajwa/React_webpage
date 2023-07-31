import React from 'react';

class ChildComponent extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <div>
        <h2>Child Component</h2>
        <p>Hello, {name}!</p>
      </div>
    );
  }
}

export default ChildComponent;
