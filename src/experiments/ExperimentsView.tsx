// we're creating a React component right now!!!
// .ts or .tsx (mix of typescript and html) are both valid endings for your typescript files
// before React 17 you had to import react explicitly; it's not neccesary anymore
import React from 'react';
import { Link, Route } from 'react-router-dom';
import ButtonEvent from './ButtonEvent';
import HelloWorld from './HelloWorld';
import HelloWorldProps from './HelloWorldProps';
import MinimalState from './MinimalState';

export default function ExperimentsView(): JSX.Element {
  return <section>
    <div className="row">
      <div className="col">
        <h2>Some Experiments are happening as we speak</h2>
      </div>
    </div>
    <div className="row">
      {/* Navigation */}
      <div className="col"></div>
      <nav>
        <ul>
          <li><Link to='/experiments/hello-world'>
              Hello, world (component)
          </Link>
          </li>
          <li><Link to='/experiments/hello-world-props'>
              What's good (props)
          </Link>
          </li>
          <li><Link to='/experiments/button-event'>
              Button is here
          </Link>
          </li>
          <li>
            <Link to='/experiments/minimal-state'>
              Find your counter here
            </Link>
          </li>
        </ul>
      </nav>
      {/* Display */}
      <div className="col"></div>
      <Route path='/experiments/hello-world'>
        <HelloWorld/>
      </Route>
      <Route path='/experiments/hello-world-props'>
        <HelloWorldProps message= "Greetings...as a property!"/>
      </Route>
      <Route path='/experiments/button-event'>
        <ButtonEvent/>
      </Route>
      <Route path ='/experiments/minimal-state'>
        <MinimalState/>
      </Route>
    </div>
  </section>
  ;
  // shoutout to JSX for this
  // export default allows you to import it without using curly braces; use only one default export per file
  // the export default is conventional for react components
  // classes in jsx are called className
}
