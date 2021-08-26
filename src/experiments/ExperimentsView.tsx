// we're creating a React component right now!!!
// .ts or .tsx (mix of typescript and html) are both valid endings for your typescript files
// before React 17 you had to import react explicitly; it's not neccesary anymore
import React from 'react';
import { Link, Route } from 'react-router-dom';
import ButtonEvent from './ButtonEvent';
import HelloWorld from './HelloWorld';
import HelloWorldProps from './HelloWorldProps';
import LiveGreeter from './LiveGreeter';
import LiveGreeterClass from './LiveGreeterClass';
import MinimalState from './MinimalState';

export default function ExperimentsView(): JSX.Element {
  return <section>
    <div className="row">
      <div className="col">
        <h2>Some Experiments are happening as we speak</h2>
      </div>
      <div className="row">
        {/* Navigation */}
        <div className="col">
          <nav>
            <ul>
              <li>
                <Link to="/experiments/hello-world">
                  Hello, world (component)!
                </Link>
              </li>
              <li>
                <Link to="/experiments/hello-world-props">
                  Hello, world (props)!
                </Link>
              </li>
              <li>
                <Link to="/experiments/button-event">Event Handling</Link>
              </li>
              <li>
                <Link to="/experiments/minimal-state">Minimal State</Link>
              </li>
              <li>
                <Link to="/experiments/controlled-component">
                  State and Input
                </Link>
              </li>
              <li>
                <Link to="/experiments/controlled-component-class">
                  State and Input (class)
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Display */}
        <div className="col">
          <Route path="/experiments/hello-world">
            <HelloWorld />
          </Route>
          <Route path="/experiments/hello-world-props">
            <HelloWorldProps message="Greetings (as a property)!" />
          </Route>
          <Route path="/experiments/button-event">
            <ButtonEvent />
          </Route>
          <Route path="/experiments/minimal-state">
            <MinimalState />
          </Route>
          <Route path="/experiments/controlled-component">
            <LiveGreeter />
          </Route>
          <Route path="/experiments/controlled-component-class">
            <LiveGreeterClass />
          </Route>
        </div>
      </div>
    </section>
  );
};
