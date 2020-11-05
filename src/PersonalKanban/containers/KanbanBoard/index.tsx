import React from "react";

import KanbanBoard from "PersonalKanban/components/KanbanBoard";

type KanbanBoardContainerProps = {};

const KanbanBoardContainer: React.FC<KanbanBoardContainerProps> = (props) => {
  const [columns, setColumns] = React.useState([]);

  return <KanbanBoard columns={columns} />;
};

export default KanbanBoardContainer;
