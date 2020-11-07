import React from "react";
import { v4 as uuidv4 } from "uuid";
import Box from "@material-ui/core/Box";

import AddColumnButton from "PersonalKanban/containers/AddColumnButton";
import KanbanBoard from "PersonalKanban/components/KanbanBoard";
import { Column } from "PersonalKanban/types";

const getId = (): string => {
  return uuidv4();
};

type KanbanBoardContainerProps = {};

const KanbanBoardContainer: React.FC<KanbanBoardContainerProps> = (props) => {
  const [columns, setColumns] = React.useState<Column[]>([]);

  const handleAddColumn = React.useCallback((column: Column) => {
    setColumns((columns: Column[]) => [
      ...columns,
      Object.assign({ id: getId() }, column),
    ]);
  }, []);

  return (
    <Box padding={1}>
      <AddColumnButton onSubmit={handleAddColumn} />
      <KanbanBoard columns={columns} />
    </Box>
  );
};

export default KanbanBoardContainer;
