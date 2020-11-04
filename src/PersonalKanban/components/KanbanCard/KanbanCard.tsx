import React from "react";
import { Draggable } from "react-beautiful-dnd";

import Card from "PersonalKanban/components/Card";
import { Record } from "PersonalKanban/types";

type KanbanCardProps = {
  record: Record;
  index: number;
  className?: string;
};

const KanbanCard: React.FC<KanbanCardProps> = (props) => {
  const { record, index, className } = props;
  return (
    <Draggable draggableId={record.id} index={index}>
      {(provided) => (
        <Card
          key={record.id}
          innerRef={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{ ...provided.draggableProps.style }}
          record={record}
          className={className}
        />
      )}
    </Draggable>
  );
};

export default KanbanCard;
