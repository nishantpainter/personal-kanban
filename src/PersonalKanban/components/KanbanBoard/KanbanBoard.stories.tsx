import React from "react";
import faker from "faker";

import KanbanBoard from "PersonalKanban/components/KanbanBoard";
import { Column, Record } from "PersonalKanban/types";
import { getId, reorder, reorderCards } from "PersonalKanban/services/Utils";

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
  columns: new Array(20).fill(0).map(() => ({
    id: getId(),
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
