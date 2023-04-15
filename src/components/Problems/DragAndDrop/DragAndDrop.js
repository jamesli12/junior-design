import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragItem from './DragItem';
import DropArea from './DropArea';

const items = [
  { id: 1, text: 'Answer 1' },
  { id: 2, text: 'Answer 2' },
  { id: 3, text: 'Answer 3' },
];

function DragAndDrop() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="drag-container">
        {items.map(item => (
          <DragItem key={item.id} item={item} />
        ))}
      </div>
      <div className="drop-container">
        {items.map((_, index) => (
          <DropArea key={index} index={index} />
        ))}
      </div>
    </DndProvider>
  );
}

export default DragAndDrop;