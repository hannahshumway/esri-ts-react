import React from 'react';

export default function AddUser(): JSX.Element {
  function AddUserHandler(): void {
    console.log( 'User successfully added.' );
  }
  return <div>
    <h3>Add a user</h3>
    <button className="btn-primary" onClick={AddUserHandler}>
      Add
    </button>
  </div>;
}
