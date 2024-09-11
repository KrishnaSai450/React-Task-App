

import React, { createContext, useState, useContext } from 'react';

// Create a Context
const CountContext = createContext();

// Create a Provider Component
const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

// Create a Counter Component
const Counter = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  );
};

// Use the Provider in Your App
const GlobalCounter = () => {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  );
};

export default GlobalCounter;
