import React from 'react';
import { useDrag } from 'react-dnd';
import './DragItem.css';

const DragItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'answer',
    item: { id: item.id, text: item.text },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className="drag-item"
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <div className="drag-item-text">{item.text}</div>
    </div>
  );
};

export default DragItem;
