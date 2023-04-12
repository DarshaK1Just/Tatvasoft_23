import React, { useState, memo } from 'react';

function ChildComponent2({ count }) {
  const [childCount, setChildCount] = useState(0);

  const handleChildClick = () => {
    setChildCount(childCount + 1);
  };

  return (
    <div>
      <h3>Child Count: {childCount}</h3>
      <h4>Parent Count: {count}</h4>
      <button onClick={handleChildClick} className='b1'>Increment Child Count</button>
    </div>
  );
}

export default memo(ChildComponent2);
