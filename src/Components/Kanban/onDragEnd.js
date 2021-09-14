import React from "react";

const ColumnsFromBack = {
  [tasks.id]: {
    name: "PENDING",
    items: ,
  },
  [tasks.id]: {
    name: "DOING",
    items: [],
  },
  [tasks.id]: {
    name: "COMPLETED",
    items: [],
  },
  [tasks.id]: {
    name: "SUBMITTED",
    items: [],
  },
  [tasks.id]: {
    name: "REJECTED",
    items: [],
  },
};


export const onDragEnd = (result, columns, setColumns) => {
  const { destination, source } = result;

  if (!result.destination) {
    return;
  }

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];

    const [removed] = sourceItems.splice(source.index, 1);

    destItems.splice(destination.index, 0, removed);

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

};

