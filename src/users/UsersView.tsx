import React from 'react';
import { Link, Route } from 'react-router-dom';
import AddUser from './AddUser';
import BrowseUsers from './BrowseUsers';
import FindUsers from './FindUsers';

export default function UsersView(): JSX.Element {
  return (
    <section>
      <div className="row">
        <div className="col">
          <h2>Users</h2>
          <div>
            <ul className="list-inline">
              <li className='list-inline-item'>
                <Link to='/users/add'>
                Add user
                </Link> •
              </li>
              <li className='list-inline-item'>
                <Link to='/users/find'>
                Find user
                </Link> •
              </li>
              <li className='list-inline-item'>
                <Link to='/users/browse'>
                Browse users
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col"></div>
      </div>
      <Route path='/users/add'>
        <AddUser/>
      </Route>
      <Route path='/users/find'>
        <FindUsers/>
      </Route>
      <Route path='/users/browse'>
        <BrowseUsers/>
      </Route>
    </section>
  );
}
// remember that you can always use a <React.Fragment> when you need to
// like a fragment you want to integrate into another component
