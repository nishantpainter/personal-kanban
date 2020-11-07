import React from "react";
import Box from "@material-ui/core/Box";

import AddColumnButton from "PersonalKanban/containers/AddColumnButton";
import KanbanBoard from "PersonalKanban/components/KanbanBoard";
import { Column } from "PersonalKanban/types";
import { getId, reorder } from "PersonalKanban/services/Utils";

type KanbanBoardContainerProps = {};

const KanbanBoardContainer: React.FC<KanbanBoardContainerProps> = (props) => {
  const [columns, setColumns] = React.useState<Column[]>([]);

  const getColumnIndex = React.useCallback(
    (id: string) => {
      return columns.findIndex((c: Column) => c.id === id);
    },
    [columns]
  );

  const handleAddColumn = React.useCallback(
    ({ column }: { column: Column }) => {
      setColumns((columns: Column[]) => [
        ...columns,
        Object.assign({ id: getId() }, column),
      ]);
    },
    []
  );

  const handleColumnMove = React.useCallback(
    ({ column, index }: { column: Column; index: number }) => {
      const updatedColumns = reorder(columns, getColumnIndex(column.id), index);
      setColumns(updatedColumns);
    },
    [columns, getColumnIndex]
  );

  return (
    <Box padding={1}>
      <AddColumnButton onSubmit={handleAddColumn} />
      <KanbanBoard columns={columns} onColumnMove={handleColumnMove} />
    </Box>
  );
};

export default KanbanBoardContainer;
