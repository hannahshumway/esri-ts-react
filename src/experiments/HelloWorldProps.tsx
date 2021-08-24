import React from 'react';

export default function HelloWorldProps( props: any ): JSX.Element {
  return <h3>{props.message}</h3>;
}
// JQuery is a toolkit; React is a framework (even tho they don't like to say it)
// React gives you tools for plugging into working with the browser's UI
