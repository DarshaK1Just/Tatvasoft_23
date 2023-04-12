import React, { useState, useEffect } from 'react';

function ChildComponent() {
  const [childCount, setChildCount] = useState(0);

  useEffect(() => {
    console.log('Child component rendered');
  });

  const handleChildClick = () => {
    setChildCount(childCount + 1);
  };

  return (
    <div>
      <h3>Child Count: {childCount}</h3>
      <button onClick={handleChildClick} className='b1'>Increment Child Count</button>
    </div>
  );
}

export default ChildComponent;
