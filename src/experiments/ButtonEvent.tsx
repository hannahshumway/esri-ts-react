import React from 'react';

const ButtonEvent = (): JSX.Element => {
  function handleButtonClick(): void {
    console.log( 'You clicked on the button.' );
  }
  return (
    <div>
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Click Me!!!
      </button></div>
  );
};

export default ButtonEvent;

// you can also use inline arrow functions instead of the separate function for onclick
