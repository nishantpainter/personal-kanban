import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

import KanbanCard from "PersonalKanban/components/KanbanCard";
import Column, { ColumnCardList } from "PersonalKanban/components/Column";
import { Column as ColumnType } from "PersonalKanban/types";

type KanbanInnerColumnCardListProps = {
  column: ColumnType;
};

const KanbanInnerColumnCardList: React.FC<KanbanInnerColumnCardListProps> = React.memo(
  (props) => {
    const { column } = props;
    return <ColumnCardList column={column} CardComponent={KanbanCard} />;
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
  className?: string;
  onEdit?: any;
};

const KanbanColumn: React.FC<KanbanColumnProps> = (props) => {
  const { column, index, className, onEdit } = props;
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <Column
          innerRef={provided.innerRef}
          column={column}
          className={className}
          ColumnCardListComponent={KanbanColumnCardList}
          onEdit={onEdit}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        />
      )}
    </Draggable>
  );
};

export default KanbanColumn;
