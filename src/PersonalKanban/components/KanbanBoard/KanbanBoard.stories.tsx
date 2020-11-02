import React from "react";
import faker from "faker";
import { v4 as uuidv4 } from "uuid";

import KanbanBoard from "PersonalKanban/components/KanbanBoard";
import { Column, Record } from "PersonalKanban/types";

const getId = (): string => {
  return uuidv4();
};

const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

function reorderCards({
  columns,
  sourceColumn,
  destinationColumn,
  sourceIndex,
  destinationIndex,
}: {
  columns: Column[];
  sourceColumn: Column;
  destinationColumn: Column;
  sourceIndex: number;
  destinationIndex: number;
}) {
  const getColumnIndex = (columnId: string) =>
    columns.findIndex((c) => c.id === columnId);

  const getRecords = (columnId: string) => [
    ...columns.find((c) => c.id === columnId)?.records,
  ];

  const current = getRecords(sourceColumn.id);
  const next = getRecords(destinationColumn.id);
  const target = current[sourceIndex];

  // moving to same list
  if (sourceColumn.id === destinationColumn.id) {
    const reordered = reorder(current, sourceIndex, destinationIndex);
    const newColumns = columns.map((c) => ({ ...c }));
    newColumns[getColumnIndex(sourceColumn.id)].records = reordered;
    return newColumns;
  }

  // moving to different list
  current.splice(sourceIndex, 1);
  next.splice(destinationIndex, 0, target);
  const newColumns = columns.map((c) => ({ ...c }));
  newColumns[getColumnIndex(sourceColumn.id)].records = current;
  newColumns[getColumnIndex(destinationColumn.id)].records = next;
  return newColumns;
}

const getCards = (count: number): Record[] => {
  return new Array(count).fill(0).map(() => ({
    id: getId(),
    title: faker.lorem.word(),
    description: faker.lorem.sentence(),
  }));
};

const getColumns = (): Column[] => {
  return [
    {
      id: getId(),
      title: "Todo",
      records: getCards(10),
    },
    {
      id: getId(),
      title: "In-Progress",
      records: getCards(11),
    },
    {
      id: getId(),
      title: "Completed",
      records: getCards(12),
    },
  ];
};

const stories = {
  title: "PersonalKanban/KanbanBoard",
  component: KanbanBoard,
};

const Template = (args: any) => {
  const [columns, setColumns] = React.useState(args.columns || getColumns());

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

  const onCardMove = React.useCallback(
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

  const onColumnMove = React.useCallback(
    ({ column, index }: { column: Column; index: number }) => {
      const updatedColumns = reorder(columns, getColumnIndex(column.id), index);
      setColumns(updatedColumns);
    },
    [columns, getColumnIndex]
  );

  return (
    <KanbanBoard
      {...args}
      columns={columns}
      onColumnMove={onColumnMove}
      onCardMove={onCardMove}
    />
  );
};

export const Default: any = Template.bind({});
Default.args = {};

export const Stress: any = Template.bind({});
Stress.args = {
  columns: new Array(20).fill(0).map((_, id) => ({
    id,
    title: faker.commerce.department(),
    description: faker.lorem.sentence(),
    caption: faker.lorem.words(),
    records: new Array(10).fill(0).map(() => ({
      id: getId(),
      title:
        faker.commerce.productAdjective() + faker.commerce.productDescription(),
      description: faker.lorem.sentences(),
      caption: faker.lorem.words(),
    })),
  })),
};

export default stories;
