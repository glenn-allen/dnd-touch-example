import React, { Component } from 'react';
import ContainerHTML from './ContainerHTML';
import ContainerTouch from './ContainerTouch';

export default class NestingDropTargets extends Component {
  render() {
    return (
      <div>
        <h2>HTML5 Backend</h2>
        <p>
          Taken from <b><a href='https://github.com/gaearon/react-dnd/tree/master/examples/03%20Nesting/Drop%20Targets'>here</a></b>
        </p>
        <p>
          The container on the right uses <code>monitor.isOver({'{'} shallow: true {'}'})</code>
          to prevent the hover spec method from being called on the parent DOM nodes.
        </p>
        <ContainerHTML />
        <h2>Touch Backend</h2>
        <p>
          The following example uses the Touch backend.  Notice how the target on the right does not behave like with the HTML5 backend.
        </p>
        <ContainerTouch />
      </div>
    );
  }
}
