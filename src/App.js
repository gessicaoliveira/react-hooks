import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }
  function increaseCount() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
    </>
  );
}

export default App;
