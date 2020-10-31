import React from "react";

import KanbanBoard from "PersonalKanban/components/KanbanBoard";

type KanbanBoardContainerProps = {};

const KanbanBoardContainer: React.FC<KanbanBoardContainerProps> = (props) => {
  return <KanbanBoard columns={[]} />;
};

export default KanbanBoardContainer;
