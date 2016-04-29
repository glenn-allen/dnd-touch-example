import React, { Component } from 'react';
import Container from './Container';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)
export default class ContainerHTML extends Component {
  render() {
    return <Container />;
  }
}
