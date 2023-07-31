// Parent component
function ParentComponent() {
    const name = "Jaislin";
    return <ChildComponent name={name} />;
  }
  
  // Child component
  function ChildComponent(props) {
    return <p>Hello, {props.name}!</p>;
  }
  