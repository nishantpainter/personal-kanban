import React from "react";
import Box from "@material-ui/core/Box";

import AddColumnButton from "PersonalKanban/containers/AddColumnButton";
import ClearBoardButton from "PersonalKanban/containers/ClearBoardButton";
import KanbanBoard from "PersonalKanban/components/KanbanBoard";
import { Column, Record } from "PersonalKanban/types";
import { getId, reorder, reorderCards } from "PersonalKanban/services/Utils";

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

  const cloneColumns = React.useCallback((columns: Column[]) => {
    return columns.map((column: Column) => ({
      ...column,
      records: [...column.records],
    }));
  }, []);

  const getColumnIndex = React.useCallback(
    (id: string) => {
      return columns.findIndex((c: Column) => c.id === id);
    },
    [columns]
  );

  const getRecordIndex = React.useCallback(
    (recordId: string, columnId: string) => {
      return columns[getColumnIndex(columnId)]?.records?.findIndex(
        (r: Record) => r.id === recordId
      );
    },
    [columns, getColumnIndex]
  );

  const handleClearBoard = React.useCallback(() => {
    setColumns([]);
  }, []);

  const handleAddColumn = React.useCallback(
    ({ column }: { column: Column }) => {
      setColumns((columns: Column[]) => [
        ...columns,
        Object.assign({ id: getId(), records: [] }, column),
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
      setColumns((_columns: Column[]) => {
        const columnIndex = getColumnIndex(column.id);
        const columns = cloneColumns(_columns);
        columns[columnIndex].title = column.title;
        columns[columnIndex].description = column.description;
        return columns;
      });
    },
    [getColumnIndex, cloneColumns]
  );

  const handleColumnDelete = React.useCallback(
    ({ column }: { column: Column }) => {
      setColumns((_columns: Column[]) => {
        const columns = cloneColumns(_columns);
        columns.splice(getColumnIndex(column.id), 1);
        return columns;
      });
    },
    [cloneColumns, getColumnIndex]
  );

  const handleCardMove = React.useCallback(
    ({
      column,
      index,
      source,
      record,
    }: {
      column: Column;
      index: number;
      source: Column;
      record: Record;
    }) => {
      const updatedColumns = reorderCards({
        columns,
        destinationColumn: column,
        destinationIndex: index,
        sourceColumn: source,
        sourceIndex: getRecordIndex(record.id, source.id)!,
      });

      setColumns(updatedColumns);
    },
    [columns, getRecordIndex]
  );

  const handleAddRecord = React.useCallback(
    ({ column, record }: { column: Column; record: Record }) => {
      const columnIndex = getColumnIndex(column.id);
      setColumns((_columns: Column[]) => {
        const columns = cloneColumns(_columns);

        columns[columnIndex].records = [
          {
            id: getId(),
            title: record.title,
            description: record.description,
            color: record.color,
          },
          ...columns[columnIndex].records,
        ];
        return columns;
      });
    },
    [cloneColumns, getColumnIndex]
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
        onCardMove={handleCardMove}
        onAddRecord={handleAddRecord}
        onRecordEdit={handleRecordEdit}
        onRecordDelete={handleRecordDelete}
      />
    </Box>
  );
};

export default KanbanBoardContainer;
