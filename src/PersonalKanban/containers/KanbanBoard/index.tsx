import React from "react";
import Box from "@material-ui/core/Box";

import AddColumnButton from "PersonalKanban/containers/AddColumnButton";
import ClearBoardButton from "PersonalKanban/containers/ClearBoardButton";
import KanbanBoard from "PersonalKanban/components/KanbanBoard";
import { Column, Record } from "PersonalKanban/types";
import { getId, reorder } from "PersonalKanban/services/Utils";

type KanbanBoardContainerProps = {};

const KanbanBoardContainer: React.FC<KanbanBoardContainerProps> = (props) => {
  const [columns, setColumns] = React.useState<Column[]>([
    {
      id: "column-1",
      title: "Todo",
      records: [{ id: "record-1", title: "Brew Coffee" }],
    },
    {
      id: "column-2",
      title: "In-Progress",
      records: [],
    },
  ]);

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

  const handleAddRecord = React.useCallback(
    ({ column }: { column: Column }) => {
      console.log(column);
    },
    []
  );

  const handleRecordEdit = React.useCallback(
    ({ column, record }: { column: Column; record: Record }) => {
      console.log(column, record);
    },
    []
  );

  const handleRecordDelete = React.useCallback(
    ({ column, record }: { column: Column; record: Record }) => {
      console.log(column, record);
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
        onAddRecord={handleAddRecord}
        onRecordEdit={handleRecordEdit}
        onRecordDelete={handleRecordDelete}
      />
    </Box>
  );
};

export default KanbanBoardContainer;
