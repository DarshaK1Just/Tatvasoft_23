import React, { useState } from 'react';
import ChildComponent2 from './ChildComponent2';

function ParentComponent2() {
  const [parentCount, setParentCount] = useState(0);

  const handleParentClick = () => {
    setParentCount(parentCount + 1);
  };

  return (
    <div>
      <h2>Parent Count: {parentCount}</h2>
      <button className='b1' onClick={handleParentClick}>Increment Parent Count</button>
      <ChildComponent2 count={parentCount} />
      <ChildComponent2 count={parentCount} />
    </div>
  );
}

export default ParentComponent2;
