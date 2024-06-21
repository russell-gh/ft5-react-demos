import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);

  const add = () => {
    setCount(count + 1);
  };
  const rem = () => {
    setCount(count - 1);
  };
  const toggle = () => {
    setActive(!active);
  };

  return (
    <>
      <p>
        {count} {active ? "Active" : "Inactive"}
      </p>
      <button onClick={add}>Add 1</button>
      <button onClick={rem}>Rem 1</button>
      <button onClick={toggle}>Toggle</button>
    </>
  );
};

export default App;
