import React, { Component } from 'react';
import Dustbin from './Dustbin';
import Box from './Box';
import CustomDragLayer from './CustomDragLayer';

export default class Container extends Component {
  render() {
    return (
      <div>
        <div style={{ overflow: 'hidden', clear: 'both', margin: '-1rem' }}>
          <Dustbin greedy>
            <Dustbin greedy>
              <Dustbin greedy />
            </Dustbin>
          </Dustbin>

          <Dustbin>
            <Dustbin>
              <Dustbin />
            </Dustbin>
          </Dustbin>
        </div>

        <div style={{ overflow: 'hidden', clear: 'both', marginTop: '1.5rem' }}>
          <Box />
        </div>

        <CustomDragLayer />
      </div>
    );
  }
}
