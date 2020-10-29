import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

import Column, { ColumnCardList } from "PersonalKanban/components/Column";
import { Column as ColumnType } from "PersonalKanban/types";

type KanbanInnerColumnCardListProps = {
  column: ColumnType;
};

const KanbanInnerColumnCardList: React.FC<KanbanInnerColumnCardListProps> = React.memo(
  (props) => {
    const { column } = props;
    return <ColumnCardList column={column} />;
  }
);

type KanbanColumnCardListProps = {
  column: ColumnType;
};

const KanbanColumnCardList: React.FC<KanbanColumnCardListProps> = (props) => {
  const { column } = props;
  const { id: columnId } = column;
  return (
    <Droppable droppableId={columnId}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <KanbanInnerColumnCardList column={column} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

type KanbanColumnProps = {
  column: ColumnType;
  index: number;
};

const KanbanColumn: React.FC<KanbanColumnProps> = (props) => {
  const { column, index } = props;
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <Column
          innerRef={provided.innerRef}
          column={column}
          ColumnCardListComponent={KanbanColumnCardList}
          {...provided.draggableProps}
        />
      )}
    </Draggable>
  );
};

export default KanbanColumn;
