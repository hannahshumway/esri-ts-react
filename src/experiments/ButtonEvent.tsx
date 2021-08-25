import React from 'react';

// const ButtonEvent = (): JSX.Element => {
//  function handleButtonClick(): void {
//    console.log( 'You clicked on the button.' );
// }
//  return (
//    <div>
//      <button className="btn btn-primary" onClick={handleButtonClick}>
//        Click Me!!!
//      </button></div>
//  );
// };

const ButtonClickEventObject = (): JSX.Element => {
  function handleButtonClick( event: React.FormEvent<HTMLButtonElement> ): void {
    console.log( 'Event: ', event );
    console.log( 'Element that fired the event', event.currentTarget.disabled );
  }

  return (
    <div><button className="btn btn-primary" onClick={handleButtonClick}>
      CLICK ME.</button>
    </div>
  );
};

export default ButtonClickEventObject;

// you can also use inline arrow functions and easily pass values
// that'd be instead of the separate function for onclick
