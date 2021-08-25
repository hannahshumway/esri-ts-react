import React, { useState } from 'react';

const LiveGreeter = (): JSX.Element => {
  const [ name, setName ] = useState( '' );
  // this usually goes near the top of our code

  function handleUpdate( event: React.FormEvent<HTMLInputElement> ): void {
    // console.log( 'Value in the form: ', event.currentTarget.value );
    setName( event.currentTarget.value );
  }

  return (
    <div className="form-group">
      <label htmlFor="your-name">Enter your name:</label>
      <input
        type="text"
        id="your-name"
        className="form-control"
        onInput={handleUpdate}
        value={name}
      />
      {name.length > 2 ? <p>Greetings, {name}</p> : <p></p>}
    </div>
  );
};
// we've got an iif going up there in name.length thing - if true, print name, if false empty <p>
// the react team likes FUNCTIONAL components, though class-based components are supported too
export default LiveGreeter;
