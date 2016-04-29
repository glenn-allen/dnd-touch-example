import React, { Component } from 'react';
import Container from './Container';
import { DragDropContext } from 'react-dnd';
import TouchBackend from 'react-dnd-touch-backend';

@DragDropContext(TouchBackend({ enableMouseEvents: true }))
export default class ContainerTouch extends Component {
  render() {
    return <Container />;
  }
}
