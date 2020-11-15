import React from "react";
import moment from "moment";
import Box from "@material-ui/core/Box";

import AddColumnButton from "PersonalKanban/containers/AddColumnButton";
import ClearBoardButton from "PersonalKanban/containers/ClearBoardButton";
import KanbanBoard from "PersonalKanban/components/KanbanBoard";
import IconButton from "PersonalKanban/components/IconButton";
import { useTheme } from "PersonalKanban/providers/ThemeProvider";
import { Column, Record } from "PersonalKanban/types";
import { getId, reorder, reorderCards } from "PersonalKanban/services/Utils";
import StorageService from "PersonalKanban/services/StorageService";

type KanbanBoardContainerProps = {};

const initialState = StorageService.getColumns() || [];

const KanbanBoardContainer: React.FC<KanbanBoardContainerProps> = (props) => {
  const [columns, setColumns] = React.useState<Column[]>(initialState);

  const { darkTheme, handleToggleDarkTheme } = useTheme();

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
        columns[columnIndex].color = column.color;
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
            createdAt: `${moment().format("DD-MM-YYYY")} ${moment().format(
              "h:mm:ss a"
            )}`,
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
      const columnIndex = getColumnIndex(column.id);
      const recordIndex = getRecordIndex(record.id, column.id);
      setColumns((_columns) => {
        const columns = cloneColumns(_columns);
        const _record = columns[columnIndex].records[recordIndex!];
        _record.title = record.title;
        _record.description = record.description;
        _record.color = record.color;
        return columns;
      });
    },
    [getColumnIndex, getRecordIndex, cloneColumns]
  );

  const handleRecordDelete = React.useCallback(
    ({ column, record }: { column: Column; record: Record }) => {
      const columnIndex = getColumnIndex(column.id);
      const recordIndex = getRecordIndex(record.id, column.id);
      setColumns((_columns) => {
        const columns = cloneColumns(_columns);
        columns[columnIndex].records.splice(recordIndex!, 1);
        return columns;
      });
    },
    [cloneColumns, getColumnIndex, getRecordIndex]
  );

  const handleAllRecordDelete = React.useCallback(
    ({ column }: { column: Column }) => {
      const columnIndex = getColumnIndex(column.id);
      setColumns((_columns) => {
        const columns = cloneColumns(_columns);
        columns[columnIndex].records = [];
        return columns;
      });
    },
    [cloneColumns, getColumnIndex]
  );

  React.useEffect(() => {
    StorageService.setColumns(columns);
  }, [columns]);

  return (
    <Box padding={1}>
      <Box display="flex" alignItems="center" marginBottom={2}>
        <AddColumnButton onSubmit={handleAddColumn} />
        &nbsp;
        <ClearBoardButton
          disabled={!columns.length}
          onClear={handleClearBoard}
        />
        &nbsp;
        <IconButton
          icon={darkTheme ? "invertColors" : "invertColorsOff"}
          onClick={handleToggleDarkTheme}
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
        onAllRecordDelete={handleAllRecordDelete}
      />
    </Box>
  );
};

export default KanbanBoardContainer;
