import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [parentCount, setParentCount] = useState(0);

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

export default ParentComponent;
