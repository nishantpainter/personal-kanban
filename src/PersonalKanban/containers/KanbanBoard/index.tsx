import React from "react";
import Box from "@material-ui/core/Box";  

import AddColumnButton from "PersonalKanban/containers/AddColumnButton";
import KanbanBoard from "PersonalKanban/components/KanbanBoard";

type KanbanBoardContainerProps = {};

const KanbanBoardContainer: React.FC<KanbanBoardContainerProps> = (props) => {
  const [columns, setColumns] = React.useState([]);

  return (
    <Box padding={1}>
      <AddColumnButton />
      <KanbanBoard columns={columns} />
    </Box>
  );
};

export default KanbanBoardContainer;
