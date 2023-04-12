import React, { createContext, useState, useContext } from 'react';

const CountContext = createContext();

export function CountProvider(props) {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  return (
    <CountContext.Provider value={{ parentCount, setParentCount, childCount, setChildCount }}>
      {props.children}
    </CountContext.Provider>
  );
}

export function useCount() {
  return useContext(CountContext);
}
