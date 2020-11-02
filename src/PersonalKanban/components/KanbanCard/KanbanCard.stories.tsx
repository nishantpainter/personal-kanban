import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import KanbanCard from "PersonalKanban/components/KanbanCard";

const stories = {
  title: "PersonalKanban/KanbanCard",
  component: KanbanCard,
};

const Template = (args: any) => (
  <DragDropContext onDragEnd={() => {}}>
    <Droppable droppableId="BOARD" type="COLUMN" direction="horizontal">
      {(provided) => {
        return (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <KanbanCard {...args} />
          </div>
        );
      }}
    </Droppable>
  </DragDropContext>
);

export const Default: any = Template.bind({});
Default.args = {
  record: {
    id: "1",
    title: "Make Coffee",
    description: "Brew vanilla coffee",
    caption: "28 Oct 2020 5:40 PM",
  },
  index: 0,
};
Default.parameters = {
  withWrapper: true,
};

export default stories;
