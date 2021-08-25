import React, { useState } from 'react';

const MinimalState = (): JSX.Element => {
  const [ count, setCount ] = useState( 0 );

  return (
    <div>
      <p>You clicked on the button {count} times!</p>
      <button className="btn btn-danger" onClick={() => setCount( count + 1 )}>
          Increment
      </button>
    </div>
  );
};
export default MinimalState;
