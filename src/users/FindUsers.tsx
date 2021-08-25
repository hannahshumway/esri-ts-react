import React from 'react';

export default function FindUsers(): JSX.Element {
  function FindUserHandler(): void {
    console.log( 'Searching for matching users...' );
  }
  return <div>
    <h3>Find a user</h3>
    <button className="btn-primary" onClick={FindUserHandler}>
          Search
    </button>
  </div>;
}
