import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import Board from "PersonalKanban/components/Board";
import Column from "PersonalKanban/components/Column";
import { Column as ColumnType } from "PersonalKanban/types";

type KanbanBoardProps = {
  columns: ColumnType[];
  onCardMove?: any;
  onColumnMove?: any;
  ColumnComponent?: any;
};

const KanbanBoard: React.FC<KanbanBoardProps> = (props) => {
  const { columns, onCardMove, onColumnMove, ColumnComponent = Column } = props;

  const getColumnById = React.useCallback(
    (columnId) => columns.find((column) => column.id === columnId),
    [columns]
  );

  const getColumnByIndex = React.useCallback((index) => columns[index], [
    columns,
  ]);

  const handleDragEnd = React.useCallback(
    (result) => {
      const { source, destination, type } = result;

      if (!destination) {
        // Invalid Destination
        return;
      }

      if (
        source.droppableId === destination.droppableId &&
        source.index === destination.index
      ) {
        // Drop position is same as original
        return;
      }

      if (type === "COLUMN") {
        onColumnMove({
          column: getColumnByIndex(source.index),
          index: destination.index,
        });
        return;
      }

      const record = getColumnById(source.droppableId)?.records?.[source.index];

      onCardMove({
        source: getColumnById(source.droppableId),
        destination: getColumnById(destination.droppableId),
        record,
        index: destination.index,
      });
    },
    [onColumnMove, onCardMove, getColumnByIndex, getColumnById]
  );

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="BOARD" type="COLUMN" direction="horizontal">
        {(provided) => (
          <Board
            innerRef={provided.innerRef}
            ColumnComponent={ColumnComponent}
            {...provided.droppableProps}
            columns={columns}
          />
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default KanbanBoard;
