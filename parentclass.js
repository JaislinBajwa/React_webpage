import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
  render() {
    const name = "Jaislin";
    
    return (
      <div>
        <h1>Parent Component</h1>
        <ChildComponent name={name} />
      </div>
    );
  }
}

export default ParentComponent;
