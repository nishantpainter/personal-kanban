import React from "react";
import Box from "@material-ui/core/Box";

import AddColumnButton from "PersonalKanban/containers/AddColumnButton";
import ClearBoardButton from "PersonalKanban/containers/ClearBoardButton";
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

  const handleClearBoard = React.useCallback(() => {
    setColumns([]);
  }, []);

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

  const handleColumnEdit = React.useCallback(
    ({ column }: { column: Column }) => {
      console.log(column);
    },
    []
  );

  const handleColumnDelete = React.useCallback(
    ({ column }: { column: Column }) => {
      console.log(column);
    },
    []
  );

  return (
    <Box padding={1}>
      <Box display="flex">
        <AddColumnButton onSubmit={handleAddColumn} />
        &nbsp;
        <ClearBoardButton
          disabled={!columns.length}
          onClear={handleClearBoard}
        />
      </Box>
      <KanbanBoard
        columns={columns}
        onColumnMove={handleColumnMove}
        onColumnEdit={handleColumnEdit}
        onColumnDelete={handleColumnDelete}
      />
    </Box>
  );
};

export default KanbanBoardContainer;
