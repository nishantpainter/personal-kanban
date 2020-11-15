import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import Board from "PersonalKanban/components/Board";
import KanbanColumn from "PersonalKanban/components/KanbanColumn";
import { Column } from "PersonalKanban/types";

type KanbanBoardProps = {
  columns: Column[];
  onCardMove?: any;
  onColumnMove?: any;
  onColumnEdit?: any;
  onColumnDelete?: any;
  onAddRecord?: any;
  onRecordEdit?: any;
  onRecordDelete?: any;
  onAllRecordDelete?: any;
  ColumnComponent?: any;
};

const KanbanBoard: React.FC<KanbanBoardProps> = (props) => {
  const {
    columns,
    onCardMove,
    onColumnMove,
    onColumnEdit,
    onColumnDelete,
    onAddRecord,
    onRecordEdit,
    onRecordDelete,
    onAllRecordDelete,
    ColumnComponent = KanbanColumn,
  } = props;

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
        column: getColumnById(destination.droppableId),
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
          <>
            <Board
              innerRef={provided.innerRef}
              ColumnComponent={ColumnComponent}
              {...provided.droppableProps}
              columns={columns}
              placeholder={provided.placeholder}
              onColumnEdit={onColumnEdit}
              onColumnDelete={onColumnDelete}
              onAddRecord={onAddRecord}
              onRecordEdit={onRecordEdit}
              onRecordDelete={onRecordDelete}
              onAllRecordDelete={onAllRecordDelete}
            />
          </>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default KanbanBoard;
