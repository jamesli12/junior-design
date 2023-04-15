import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';

function DropArea({ index, setDropData, clear }) {
  const [droppedItem, setDroppedItem] = useState(null);

  useEffect(() => {
    if (clear) {
      setDroppedItem(null);
    }
  }, [clear]);  

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'answer',
    drop: (item) => {
      setDroppedItem(item);
      setDropData((prev) => ({ ...prev, [index]: item.id - 1 }));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className="drop-area"
    >
      {droppedItem && (
        <div
          className="dropped-item"
          style={{
            background: 'rgba(0, 0, 255, 0.1)',
          }}
        >
          <div className="dropped-item-text">{droppedItem.text}</div>
        </div>
      )}
    </div>
  );
}

export default DropArea;
