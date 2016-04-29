import React from 'react';
import { DragLayer } from 'react-dnd';

const collect = (monitor) => ({
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
});

const dragLayerStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 10,
    pointerEvents: 'none',
};

@DragLayer(collect)
class CustomDragLayer extends React.Component {
    render() {
        const { isDragging, currentOffset } = this.props;

        if (!isDragging || !currentOffset) {
            return null;
        }

        const { x, y } = currentOffset;
        const transform = `translate3d(${x}px, ${y}px, 0)`;
        const dragBoxStyle = {
          display: 'inline-block',
          border: '1px dashed black',
          padding: '0.5rem 1rem',
          backgroundColor: 'white',
          cursor: 'move',
          transform,
          WebkitTransform: transform,
        };

        return (
            <div style={dragLayerStyle}>
                <div style={dragBoxStyle}>
                    Drag me
                </div>
            </div>
        );
    }
}

export default CustomDragLayer;
