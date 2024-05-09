import React, { useState, useEffect } from 'react';

const CounterWithEffect = () => {
  // State variable to store the count
  const [count, setCount] = useState(0);

  // Effect to update document title with count value
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Dependency array ensures effect runs only when count changes

  // Function to increment count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter with useState and useEffect</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterWithEffect;
