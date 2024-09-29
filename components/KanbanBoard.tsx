// /components/KanbanBoard.tsx
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialColumns = {
  'to-do': {
    name: 'A Fazer',
    items: [{ id: '1', content: 'Tarefa 1' }, { id: '2', content: 'Tarefa 2' }]
  },
  'in-progress': {
    name: 'Em Progresso',
    items: [{ id: '3', content: 'Tarefa 3' }]
  },
  'done': {
    name: 'Concluídas',
    items: []
  }
};

const KanbanBoard = () => {
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];

    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);

    setColumns({
      ...columns,
      [source.droppableId]: { ...sourceColumn, items: sourceItems },
      [destination.droppableId]: { ...destColumn, items: destItems },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {Object.entries(columns).map(([id, column]) => (
          <Droppable droppableId={id} key={id}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{ margin: '0 8px', border: '1px solid lightgray', padding: '16px', width: '300px' }}
              >
                <h2>{column.name}</h2>
                {column.items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          padding: '16px',
                          margin: '0 0 8px 0',
                          backgroundColor: 'white',
                          border: '1px solid lightgray',
                          ...provided.draggableProps.style,
                        }}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
