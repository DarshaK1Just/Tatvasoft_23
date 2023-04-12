import React, { useEffect } from 'react';
import ChildComponent from './ChildComponent';
import { useCount } from './CountContext';

function ParentComponent3() {
  const { parentCount, setParentCount } = useCount();

  useEffect(() => {
    console.log('Parent component rendered');
  });

  const handleParentClick = () => {
    setParentCount(parentCount + 1);
  };

  return (
    <div>
      <h2>Parent Count: {parentCount}</h2>
      <button className='b1' onClick={handleParentClick}>Increment Parent Count</button>
      <ChildComponent />
    </div>
  );
}

export default ParentComponent3;
